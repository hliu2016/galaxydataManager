import { Router } from 'express'
let router = Router()

router.get('/user', require('./user/user'))
router.get('/login', require('./login/login'))
router.get('/', (req, res, next) => {
    res.redirect('/login')
})


module.exports = router