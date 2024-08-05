import { Router } from 'express'
import { CategoryController } from '../controllers/category-controller.mjs'

const categoryRoutes = Router()

categoryRoutes.get('/categories', CategoryController.all);
categoryRoutes.get('/categories/:id', CategoryController.one);
categoryRoutes.post('/categories', CategoryController.new);
categoryRoutes.put('/categories', CategoryController.edit);
categoryRoutes.delete('/categories', CategoryController.remove);

export default categoryRoutes
