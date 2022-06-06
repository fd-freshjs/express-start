const express = require("express");
const heroRouter = require("./heroes.router.js");
const userRouter = require("./user.router.js");

const router = express.Router();

// rest api
router.use('/users', userRouter);
router.use('/heroes', heroRouter);

module.exports = router;
