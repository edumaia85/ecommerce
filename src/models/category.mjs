import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.mjs'

export const Category = sequelize.define('categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
})
