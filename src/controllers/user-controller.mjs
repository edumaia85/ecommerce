import { User } from '../models/user.mjs'
import bcrypt from 'bcrypt'

const saltRounds = 10

export const UserController = Object.create(Object.prototype)

UserController.new = async (req, res) => {
    if (req.body.email && req.body.password === req.body.repeatpassword) {
        const hash = bcrypt.hashSync(req.body.password, saltRounds)
        const created = await User.create({
            email: req.body.email,
            password: hash
        })

        res.json({ registered: true, message: "Usuário cadastrado com sucesso!" })
    } else {
        res.json({ registered: false, message: "Erro ao cadastrar usuário" })
    }
}

UserController.existUser = async (req, res) => {
    const count = await User.count()

    res.json({ existuser: count > 0 })
}

UserController.login = async (req, res) => {
    const user = await User.findOne({
        where: { email: req.body.email }
    })

    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            console.log(req.body.password, user.password)

            req.session.logged = true
            req.session.email = user.email
            res.json({ logged: req.session.logged })
        } else {
            res.json({ logged: false })
        }
    } else {
        res.json({ logged: false })
    }
}

UserController.logout = async (req, res) => {
    req.session.logged = false
    req.session.email = null
    res.json({ logged: req.session.logged })
}

UserController.logged = async (req, res) => {
    const count = await User.count()

    if (count == 0) {
        res.json({ logged: false, nouser: true })
    } else {
        res.json({ logged: req.session.logged ? true : false })
    }
}
