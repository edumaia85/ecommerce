import { Router } from "express";
import { UserController } from '../controllers/user-controller.mjs'

export const userRoutes = Router()

userRoutes.post('/', UserController.new);
userRoutes.get('/existuser', UserController.existUser);
userRoutes.post('/login', UserController.login);
userRoutes.get('/logged', UserController.logged);
userRoutes.get('/logout', UserController.logout);

export default userRoutes
