const client = require("./client");
const { sliders } = require("./seedData");
const { createSlider } = require("./sqlHelperFunctions/sliders");

const dropTables = async () => {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS sliders CASCADE;
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

const buildDb = async () => {
  try {
    client.connect();
    await dropTables();
    await createTable();
    await createInitialSlider();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
