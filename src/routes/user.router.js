
const express = require("express");
const { middleWare } = require("../middlewares/index.js");
const userController = require("../controllers/user.cont.js");

// path /users
const userRouter = express.Router();

// route -> mws -> endpoint/controller (getUser)

// localhost:5000/users/123/get
userRouter.get('/:id/get', middleWare, userController.getUser);
userRouter.delete('/:id', userController.deleteUser);

userRouter.post('/', userController.createUser);
userRouter.patch('/', userController.updateUser); // обновление
userRouter.put('/', userController.updateUser); // замена

module.exports = userRouter;
