import { Category } from '../models/category.mjs'

export const CategoryController = Object.create(Object.prototype)

CategoryController.new = async (req, res) => {
    const category = await Category.create({
        name: req.body.name,
        description: req.body.description
    })

    res.send(category)
}

CategoryController.one = async (req, res) => {
    const category = await Category.findOne({
        where: { id: req.params.id }
    })

    res.json(category)
}

CategoryController.all = async (_, res) => {
    res.json(await Category.findAll())
}

CategoryController.edit = async (req, res) => {
    const category = Category.findOne({
        where: { id: req.body.id }
    })

    category.name = req.body.name
    category.description = req.body.description

    await category.save()
    res.json(category)
}

CategoryController.remove = async (req, res) => {
    const category = await Category.findOne({
        where: { id: req.body.id }
    })

    await category.destroy()
    res.json(category)
}
