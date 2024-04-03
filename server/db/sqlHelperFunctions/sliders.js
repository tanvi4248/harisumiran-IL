const client = require("../client");

async function getAllSliders() {
  try {
    const { rows } = await client.query(`
                  SELECT * FROM sliders;
              `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createSlider({ image }) {
  try {
    const {
      rows: [slider],
    } = await client.query(
      `
              INSERT INTO sliders(image)
              VALUES($1)
              RETURNING *;
              `,
      [image]
    );
    return slider;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllSliders,
  createSlider,
};
