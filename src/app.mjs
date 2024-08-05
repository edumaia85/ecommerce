import express from 'express'
import CSS from 'connect-session-sequelize'
import session from 'express-session'
import cors from 'cors'

import categoryRoutes from './routes/category-routes.mjs'
import { productRoutes } from './routes/product-routes.mjs'
import { userRoutes } from './routes/user-routes.mjs'

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

app.use(cors({
    origin: [
        'http://localhost:5500',
        'http://127.0.0.1:5500',
    ],
    credentials: true
}))
app.use(express.urlencoded())
app.use(express.json())

app.use(categoryRoutes)
app.use(productRoutes)
app.use(userRoutes)

// Rotas para veículos, elas apenas são acionadas se o usuário estiver logado
app.use((req, res, next) => {
    if (req.session.logged) {
        next()
    } else {
        res.json({ logged: false })
    }
})

app.listen(3333, () => {
    console.log('HTTP server running!')
})
