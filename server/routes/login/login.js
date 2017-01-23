/**
 * @param req
 * @param res
 * @param next
 */
import Joi from 'joi'
import Promise from 'bluebird'
import * as model from '../../model/login/login'

module.exports = async (req, res, next) => {
        const {email, password} = req.body
        const userinfo = {email: email, password: password}
        let vr = await Promise.promisify(Joi.validate)(userinfo, Joi.object().keys({
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        }))

        let qr = await model.signin_validate(userinfo)
        if (vr && qr) {
            req.session.user = userinfo.email
            return res.json({
                "statCode": '200',
                "msg": 'success',
                "url": '/user'
            })
        } else {
            return res.json({
                "statCode": '201',
                "msg": 'error'
            })
        }
}
