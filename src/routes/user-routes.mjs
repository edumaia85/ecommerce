import { Router } from "express";
import { UserController } from '../controllers/user-controller.mjs'

export const userRoutes = Router()

userRoutes.post('/user', UserController.new);
userRoutes.post('/login', UserController.login);
userRoutes.get('/logged', UserController.logged);
userRoutes.get('/logout', UserController.logout);
