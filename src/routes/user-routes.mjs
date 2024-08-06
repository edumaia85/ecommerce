import { Router } from "express";
import { UserController } from '../controllers/user-controller.mjs'

const userRoutes = Router()

userRoutes.post('/user', UserController.new);
userRoutes.post('/user/login', UserController.login);
userRoutes.get('/user/logged', UserController.logged);
userRoutes.get('/user/logout', UserController.logout);

export default userRoutes
