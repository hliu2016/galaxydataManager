/**
 *
 */
import Joi from 'joi'
import Promise from 'bluebird'
import * as model from '../../model/signup/signup'
import mailer from '../../utils/emailer'

module.exports = async (req, res, next) => {
    const { username, email, password } = req.body
    const userdata = { username: username, email: email, password: password }
    let validateResult = await Promise.promisify(Joi.validate)(userdata, Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    }))

    //todo mailer
    // let er = await mailer()
    await model.register(userdata)
    if(validateResult) {
        return res.json({
            statCode: "200",
            msg: "success",
        });
    }
    else return res.json({
            statCode: "201",
            msg: "error"
        })
}