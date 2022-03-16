const { Router } = require('express');
// import seed data here
const Character = require('../models/Character');

module.exports = Router()

  .get('/', (req, res, next) => {
    Character.getAll()
      .then((post) => res.send(post))
      .catch(next);
  });
