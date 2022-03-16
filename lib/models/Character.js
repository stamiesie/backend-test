const pool = require ('../utils/pool');

module.exports = class Character {
  id;
  name;
  film;
  age;

  constructor(row) {
    this.id = row.character_id;
    this.name = row.character_name;
    this.film = row.character_film;
    this.age = row.character_age;
  }

  static async getAll(){
    const { rows } = await pool.query(
      'SELECT * FROM characters',
      []
    );
    return rows.map((row) => new Character(row));
  }
};
