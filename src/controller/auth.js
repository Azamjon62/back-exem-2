import { sign } from "../helpers/jwt.helper.js"
import { readFileCustom } from "../helpers/read-helper.js"
import { NotFoundException } from "../errors/not-found.exception.js"

export default {
    LOGIN_PAGE: (_, res) => {
        res.render('auth.ejs')
    },
    SIGN_IN: (req, res) => {
        const { username, password } = req.body

        const user = readFileCustom('users.json').find(e => e.username === username && e.password === password)

        if(!user) {
            throw new NotFoundException('User not found')
        }

        res.cookie('accessToken', sign({
            id: user.id
        }))

        if(user.role === 'admin') {
            res.redirect('/admin')
        } else if(user.role === 'teacher') {
            res.redirect('/teacher')
        }
            res.redirect('/student')
    },
    SIGN_OUT: (req, res) => {
        res.clearCookie('accessToken')
        res.redirect('/')
    }

}
