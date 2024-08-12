import { Router } from 'express'
import { ProductController } from '../controllers/product-controller.mjs'

export const productRoutes = Router()

productRoutes.use((req, res, next) => {
    if (req.session.logged) {
        next()
    } else {
        res.json({ logged: false })
    }
})

productRoutes.get('/', ProductController.all)
productRoutes.get('/:id', ProductController.one)
productRoutes.post('/', ProductController.new)
productRoutes.put('/', ProductController.edit)
productRoutes.delete('/', ProductController.remove)
