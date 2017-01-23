import { Router } from 'express'
let router = Router()

/**
 * routes
 */
router.get('/', require('./index-main/index-main'))
router.route('/login').post(require('./login/login'))
router.route('/signup').post(require('./signup/signup'))
router.route('/logout').get(require('./logout/logout'))
router.route('/user').get(require('./dataplatform/homepage'))

/**
 * route working for adminLTE module
 */
router.route('/test').get(require('./test/test'))
router.route('/boxed').get(require('./test/boxed'))
router.route('/user/index2').get(require('./test/index2'))
router.route('/user/collapsed').get(require('./test/collapsed-sidebar'))
router.route('/user/topnav').get(require('./test/top-nav'))
router.route('/user/fixed').get(require('./test/fixed'))

module.exports = router