const client = require("../client");

async function getEvents() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM events WHERE date >= NOW() ORDER BY date ASC;
                `);
    return rows;
  } catch (error) {
    throw error;
  }
}
async function createEvents({ title, date, time_start, time_end, image_url }) {
  try {
    const {
      rows: [events],
    } = await client.query(
      `
              INSERT INTO events(title, date, time_start, time_end, image_url)
              VALUES($1,$2,$3,$4,$5)
              RETURNING *;
              `,
      [title, date, time_start, time_end, image_url]
    );
    return events;
  } catch (error) {
    throw error;
  }
}
async function updateEvents(eventsId, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  if (setString.length === 0) {
    return;
  }

  try {
    const {
      rows: [events],
    } = await client.query(
      `
    UPDATE events
    SET ${setString}
    WHERE id=${eventsId}
    RETURNING *;
  `,
      Object.values(fields)
    );

    return events;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getEvents,
  createEvents,
  updateEvents,
};
