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

categoryRoutes.get('/', CategoryController.all);
categoryRoutes.get('/:id', CategoryController.one);
categoryRoutes.post('/', CategoryController.new);
categoryRoutes.put('/', CategoryController.edit);
categoryRoutes.delete('/', CategoryController.remove);
