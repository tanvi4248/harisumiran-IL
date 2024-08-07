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
      DROP TABLE IF EXISTS events CASCADE;
      DROP TABLE IF EXISTS contacts CASCADE;
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
      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time_start TIME NOT NULL,
        time_end TIME NOT NULL,
        image_url VARCHAR(255)
    );
    CREATE TABLE contacts (
      id SERIAL PRIMARY KEY,
      firstname VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message VARCHAR(255) NOT NULL
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
const createInitialEvents = async () => {
  try {
    await client.query(`
    INSERT INTO events (title, date, time_start, time_end, image_url)
    VALUES
        ('Hari Pragatya Din', '5/18/2024', '05:00:00 AM','07:00:00 PM','/event-02.jpg')`);
    console.log("created events");
  } catch (error) {
    throw error;
  }
};
const createInitialContacts = async () => {
  try {
    await client.query(`
    INSERT INTO contacts (firstname, lastname, email, subject, message)
    VALUES
        ('abc', 'xyz', 'abc@gmail.com','abcxyz','hello there!')`);
    console.log("created contacts");
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
    await createInitialEvents();
    await createInitialContacts();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
