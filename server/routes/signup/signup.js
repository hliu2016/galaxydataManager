/**
 *
 */
import Joi from 'joi'
import Promise from 'bluebird'
import * as model from '../../model/signup/signup'
import mailer from '../../utils/emailer'

module.exports = async (req, res, next) => {
    const { email, password, confirm_password } = req.body
    const userdata = {email: email, password: password, confirm_password: confirm_password}
    let vr = await Promise.promisify(Joi.validate)(userdata, Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        confirm_password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }))
    let er = await mailer()
    let qr = await model.register(userdata)
    if(vr && qr && er) {
        return res.json({
            statCode: "200",
            msg: "success",
            url: '/login'
        });
    }
    else return res.json({
            statCode: "201",
            msg: "error"
        })
}