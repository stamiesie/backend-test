const pool = require('../lib/utils/pool');
const characters = require('./seed-data');

const seedTable = async () => {
  try {
    await Promise.all(
      characters.map(async (char) => {
        return pool.query(`
            INSERT INTO characters (character_name, character_film, character_age)
            VALUES ($1, $2, $3)
            RETURNING *;
            `,
        [
          char.character_name,
          char.character_film,
          char.character_age,
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

module.exports = {
  seedTable,
};
