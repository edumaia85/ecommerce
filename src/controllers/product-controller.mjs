import { Product } from '../models/product.mjs'

export const ProductController = {
    "new": async (req, res) => {
        const { name, price, description, stockQuantity, slug } = req.body

        const product = await Product.create({
            name,
            price,
            description,
            stockQuantity,
            slug
        })

        res.status(201).send(product)
    },

    "one": async (req, res) => {
        const { id } = req.params

        const product = await Product.findOne({
            where: {
                id
            }
        })

        res.status(200).json(product)
    },

    "all": async (_, res) => {
        res.json(await Product.findAll())
    },

    "edit": async (req, res) => {
        const { name, price, description, stockQuantity, slug } = req.body

        const product = await Product.findOne({
            where: {
                id
            }
        })

        product.name = name
        product.price = price
        product.description = description
        product.stockQuantity = stockQuantity
        product.slug = slug

        await product.save()

        res.status(201).json(product)
    },

    "remove": async (req, res) => {
        const { id } = req.body

        const product = await Product.findOne({
            where: {
                id
            }
        })

        await product.destroy()

        res.json(product)
    }
}
