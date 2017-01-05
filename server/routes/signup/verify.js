/**
 *
 */
import Joi from 'joi'
import Promise from 'bluebird'
import * as model from '../../model/signup/signup'

module.exports = async (req, res, next) => {
    const { email, password, confirm_password } = req.body
    await Promise.promisify(Joi.validate)(Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        confirm_password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }))
    // let result = await model.show(
    console.log(email, password, confirm_password)
    if(1) {
        return res.json({
            statCode: "200",
            msg: "success"
        });
    }
    else return res.json({
            statCode: "201",
            msg: "error"
        })
}