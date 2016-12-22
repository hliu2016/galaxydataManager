import { Router } from 'express'
let router = Router()

/**
 * routes
 */
router.get('/user', require('./dataplatform/homepage'))
router.route('/login').get(require('./login/display')).post(require('./login/verify'))
router.route('/signup').get(require('./signup/display'))
router.get('/', (req, res, next) => {
    res.redirect('/login')
})


module.exports = router