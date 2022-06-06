const express = require("express");
const { heroCreateMiddleware, heroUpdateMiddleware } = require("../middlewares/hero.mw.js");
const heroController = require('../controllers/hero.cont.js'); 

const heroRouter = express.Router();

// POST /heroes/create
heroRouter.post('/create', heroCreateMiddleware, heroController.createHero);

// validate update data
// update hero by id
heroRouter.patch('/:id', heroUpdateMiddleware, heroController.updateHero);

module.exports = heroRouter;
