import { sequelize } from '../database/connection.mjs'
import { DataTypes } from 'sequelize'

export const User = sequelize.define('users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
})

User.sync()
