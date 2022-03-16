const { Router } = require('express');
// const characters = require('../../data/seed-data');
const Character = require('../models/Character');

module.exports = Router()

  .get('/', (req, res, next) => {
    Character.getAll()
      .then((char) => res.send(char))
      .catch(next);
  });
