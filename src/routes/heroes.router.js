const express = require("express");
const { heroCreateMiddleware } = require("../middlewares/hero.mw.js");
const heroController = require('../controllers/hero.cont.js'); 

const heroRouter = express.Router();

// POST /heroes/create
heroRouter.post('/create', heroCreateMiddleware, heroController.createHero);

module.exports = heroRouter;
