/**
 * @param req
 * @param res
 * @param next
 */
import Joi from 'joi'
import Promise from 'bluebird'
import * as model from '../../model/login/login'

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const userinfo = {email: email, password: password}
        let validate = await Promise.promisify(req.body, Joi.validate)(userinfo, Joi.object().keys({
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        }))

        let result = await model.signin_validate(userinfo)

        if (password && email) {
            req.session.user = "zhujiahao"
            console.log(req.session)
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
    } catch (e){
        console.log(e||e.stack)
    }
}
