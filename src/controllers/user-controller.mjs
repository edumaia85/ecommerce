import { User } from '../models/user.mjs'
import bcrypt from 'bcrypt'

const saltRounds = 10

export const UserController = Object.create(Object.prototype)

UserController.new = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, saltRounds)
    const created = await User.create({
        email: req.body.email,
        password: hash
    })
    res.json({ "email": created.email })
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
    res.json({ logged: req.session.logged ? true : false })
}
