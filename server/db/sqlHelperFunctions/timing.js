const client = require("../client");

async function getAllTimings() {
  try {
    const { rows } = await client.query(`
                  SELECT * FROM dtimings;
              `);
    return rows;
  } catch (error) {
    throw error;
  }
}
async function createTiming({ title, day }) {
  try {
    const {
      rows: [timing],
    } = await client.query(
      `
              INSERT INTO dtimings(title, day)
              VALUES($1,$2)
              RETURNING *;
              `,
      [title, day]
    );
    return timing;
  } catch (error) {
    throw error;
  }
}
async function getAllAtimings() {
  try {
    const { rows } = await client.query(`
                  SELECT * FROM atimings;
              `);
    return rows;
  } catch (error) {
    throw error;
  }
}
async function createAtiming({ title, day }) {
  try {
    const {
      rows: [atiming],
    } = await client.query(
      `
              INSERT INTO atimings(title, day)
              VALUES($1,$2)
              RETURNING *;
              `,
      [title, day]
    );
    return atiming;
  } catch (error) {
    throw error;
  }
}
async function getAllTtimings() {
  try {
    const { rows } = await client.query(`
                  SELECT * FROM ttimings;
              `);
    return rows;
  } catch (error) {
    throw error;
  }
}
async function createTtiming({ title, day }) {
  try {
    const {
      rows: [ttiming],
    } = await client.query(
      `
              INSERT INTO ttimings(title, day)
              VALUES($1,$2)
              RETURNING *;
              `,
      [title, day]
    );
    return ttiming;
  } catch (error) {
    throw error;
  }
}
async function getAllStimings() {
  try {
    const { rows } = await client.query(`
                  SELECT * FROM stimings;
              `);
    return rows;
  } catch (error) {
    throw error;
  }
}
async function createStiming({ title, day }) {
  try {
    const {
      rows: [stiming],
    } = await client.query(
      `
              INSERT INTO stimings(title, day)
              VALUES($1,$2)
              RETURNING *;
              `,
      [title, day]
    );
    return stiming;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllTimings,
  createTiming,
  getAllAtimings,
  createAtiming,
  getAllTtimings,
  createTtiming,
  getAllStimings,
  createStiming,
};
