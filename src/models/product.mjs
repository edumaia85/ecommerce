import { DataTypes } from 'sequelize'

import { sequelize } from '../database/connection.mjs'
import { Category } from './category.mjs'

export const Product = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    stockQuantity: {
        type: DataTypes.INTEGER,
        field: 'stock_quantity'
    },
    slug: DataTypes.STRING,
})

Product.belongsTo(Category)
