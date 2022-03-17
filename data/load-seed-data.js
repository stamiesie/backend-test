const pool = require('../lib/utils/pool.js');
const characters = require('./seed-data.js');

const seedTable = async () => {
  try {
    await Promise.all(
      characters.map(async (character) => {
        await pool.query(`
            INSERT INTO characters (name, film_name, age)
            VALUES ($1, $2, $3)
            RETURNING *;
            `,
        [
          character.name,
          character.film_name,
          character.age,
        ]
        );
      })
    );
  }
  catch (err) {
    console.log(err);
  }
};

seedTable();
