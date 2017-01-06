import { Router } from 'express'
let router = Router()

/**
 * routes
 */
router.get('/', (req, res, next) => {return res.redirect('/login')})
router.route('/login').get(require('./login/display')).post(require('./login/verify'))
router.route('/signup').get(require('./signup/display')).post(require('./signup/verify'))
router.route('/logout').get(require('./logout/logout'))
router.route('/user').get(require('./dataplatform/homepage'))

/**
 * route working for adminLTE module
 */
router.route('/test').get(require('./test/test'))
router.route('/user/index').get(require('./test/index'))
router.route('/user/index2').get(require('./test/index2'))
router.route('/user/collapsed').get(require('./test/collapsed-sidebar'))
router.route('/user/topnav').get(require('./test/top-nav'))
router.route('/user/fixed').get(require('./test/fixed'))



module.exports = router