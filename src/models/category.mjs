import { DataTypes } from 'sequelize'

import { sequelize } from '../database/connection.mjs'
import { Product } from './product.mjs'

export const Category = sequelize.define('categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
})

Category.hasMany(Product, {
    foreignKey: 'categoryId'
})
