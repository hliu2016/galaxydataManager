import { Router } from 'express'
let router = Router()

/**
 * routes
 */
router.route('/test').get(require('./test/test'))
router.get('/', (req, res, next) => {return res.redirect('/login')})
router.route('/login').get(require('./login/display')).post(require('./login/verify'))
router.route('/signup').get(require('./signup/display')).post(require('./signup/verify'))
router.route('/user').get(require('./dataplatform/homepage'))

module.exports = router