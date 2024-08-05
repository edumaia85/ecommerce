import { Router } from 'express'
import { ProductController } from '../controllers/product-controller.mjs'

export const productRoutes = Router()

productRoutes.get('/product', ProductController.all)
productRoutes.get('/product/:id', ProductController.one)
productRoutes.post('/product', ProductController.new)
productRoutes.put('/product', ProductController.edit)
productRoutes.delete('/product', ProductController.remove)
