const express = require("express");
const { heroCreateMW, heroUpdateMW, heroExistsMW } = require("../middlewares/hero.mw.js");
const heroController = require('../controllers/hero.cont.js'); 
const { uploadHeroPhotoMw } = require("./upload.js");

const heroRouter = express.Router();

// POST /heroes/create
heroRouter.post('/create', uploadHeroPhotoMw('photo'), heroCreateMW, heroController.createHero);

// validate update data
// update hero by id
heroRouter.patch('/:id', uploadHeroPhotoMw('photo'), heroUpdateMW, heroController.updateHero);

module.exports = heroRouter;
