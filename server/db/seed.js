const client = require("./client");
const {
  sliders,
  dtimings,
  atimings,
  ttimings,
  stimings,
} = require("./seedData");
const { createSlider } = require("./sqlHelperFunctions/sliders");
const {
  createTiming,
  createAtiming,
  createTtiming,
  createStiming,
} = require("./sqlHelperFunctions/timing");

const dropTables = async () => {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS sliders CASCADE;
      DROP TABLE IF EXISTS dtimings CASCADE;
      DROP TABLE IF EXISTS atimings CASCADE;
      DROP TABLE IF EXISTS ttimings CASCADE;
      DROP TABLE IF EXISTS stimings CASCADE;
      `);
    console.log("Table Dropped!");
  } catch (error) {
    console.log("Error dropping table:", error);
  }
};

const createTable = async () => {
  try {
    console.log("building tables..");
    await client.query(`
      CREATE TABLE sliders(
        id SERIAL PRIMARY KEY,
        image TEXT NOT NULL
      );
      CREATE TABLE dtimings(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        day TEXT NOT NULL
      );
      CREATE TABLE atimings(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        day TEXT NOT NULL
      );
      CREATE TABLE ttimings(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        day TEXT NOT NULL
      );
      CREATE TABLE stimings(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        day TEXT NOT NULL
      );
      `);
    console.log("Tables Created!");
  } catch (error) {
    console.error(error);
  }
};

const createInitialSlider = async () => {
  try {
    for (const slider of sliders) {
      await createSlider(slider);
    }
    console.log("created slider");
  } catch (error) {
    throw error;
  }
};

const createInitialTimings = async () => {
  try {
    for (const dtiming of dtimings) {
      await createTiming(dtiming);
    }
    console.log("created dtiming");
  } catch (error) {
    throw error;
  }
};

const createInitialAtimings = async () => {
  try {
    for (const atiming of atimings) {
      await createAtiming(atiming);
    }
    console.log("created atiming");
  } catch (error) {
    throw error;
  }
};
const createInitialTtimings = async () => {
  try {
    for (const ttiming of ttimings) {
      await createTtiming(ttiming);
    }
    console.log("created ttiming");
  } catch (error) {
    throw error;
  }
};
const createInitialStimings = async () => {
  try {
    for (const stiming of stimings) {
      await createStiming(stiming);
    }
    console.log("created stiming");
  } catch (error) {
    throw error;
  }
};
const buildDb = async () => {
  try {
    client.connect();
    await dropTables();
    await createTable();
    await createInitialSlider();
    await createInitialTimings();
    await createInitialAtimings();
    await createInitialTtimings();
    await createInitialStimings();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
