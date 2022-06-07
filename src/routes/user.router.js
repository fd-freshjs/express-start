
const express = require("express");
const { getByIdValidation } = require("../middlewares/user.mw.js");
const userController = require("../controllers/user.cont.js");
const { uploadAvatarMw } = require("./upload.js");

// path /users
const userRouter = express.Router();

// route -> mws -> endpoint/controller (getUser)

// localhost:5000/users/123/get
userRouter.get('/:id/get', getByIdValidation, userController.getUser);
userRouter.delete('/:id', userController.deleteUser);

userRouter.post('/', userController.createUser);
userRouter.patch('/', uploadAvatarMw('avatar'), userController.updateUser); // обновление

module.exports = userRouter;
