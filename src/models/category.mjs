import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.mjs'

const Category = sequelize.define('categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
})

Category.sync()

export default Category


