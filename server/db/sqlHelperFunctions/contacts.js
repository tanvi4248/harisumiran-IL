const client = require("../client"); // Assuming client is properly configured to connect to the database

async function getContacts() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM contacts;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createContacts({
  firstname,
  lastname,
  email,
  subject,
  message,
}) {
  try {
    const {
      rows: [contact],
    } = await client.query(
      `
      INSERT INTO contacts(firstname, lastname, email, subject, message)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
    `,
      [firstname, lastname, email, subject, message]
    );
    return contact;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getContacts,
  createContacts,
};
