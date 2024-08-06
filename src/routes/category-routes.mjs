import { Router } from 'express'
import { CategoryController } from '../controllers/category-controller.mjs'

export const categoryRoutes = Router()

categoryRoutes.use((req, res, next) => {
    if (req.session.logged) {
        next()
    } else {
        res.json({ logged: false })
    }
})


categoryRoutes.get('/categories', CategoryController.all);
categoryRoutes.get('/categories/:id', CategoryController.one);
categoryRoutes.post('/categories', CategoryController.new);
categoryRoutes.put('/categories', CategoryController.edit);
categoryRoutes.delete('/categories', CategoryController.remove);
