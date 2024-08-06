import express from 'express'
import CSS from 'connect-session-sequelize'
import session from 'express-session'

import { categoryRoutes } from './routes/category-routes.mjs'
import { productRoutes } from './routes/product-routes.mjs'
import userRoutes from './routes/user-routes.mjs'

import { sequelize } from './database/connection.mjs'

const app = express()

const SequelizeStore = CSS(session.Store)

app.use(
    session({
        secret: '#7UIERU933E00LERI##327345&6',
        store: new SequelizeStore({
            db: sequelize
        })
    })
)

sequelize.sync()

app.use(express.urlencoded())
app.use(express.json())

app.use(express.static('public'))

app.use(userRoutes)
app.use(categoryRoutes)
app.use(productRoutes)

app.listen(3333, () => {
    console.log('HTTP server running!')
})
