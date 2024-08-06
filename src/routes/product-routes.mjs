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

productRoutes.get('/product', ProductController.all)
productRoutes.get('/product/:id', ProductController.one)
productRoutes.post('/product', ProductController.new)
productRoutes.put('/product', ProductController.edit)
productRoutes.delete('/product', ProductController.remove)
