const pool = require ('../utils/pool');

module.exports = class Character {
  id;
  name;
  film_name;
  age;
  voice_actor;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.filmName = row.film_name;
    this.age = row.age;
    this.voiceActor = row.voice_actor;
  }

  static async getAll(){
    const { rows } = await pool.query(
      'SELECT * FROM characters',
      []
    );
    return rows.map((row) => new Character(row));
  }
};
