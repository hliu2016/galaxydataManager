/**
 *
 */
import Joi from 'joi'
import Promise from 'bluebird'
import * as model from '../../model/signup/signup'
import mailer from '../../utils/emailer'

module.exports = async (req, res, next) => {
    try {
        const userdata = {username: req.body.username, email: req.body.email, password: req.body.password}
        await Promise.promisify(Joi.validate)(userdata, Joi.object().keys({
            username: Joi.string().min(3).max(30).required(),
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        }))
        // let er = await mailer(userdata.username)
        try {
            await model.register(userdata)
            return res.json({
                statCode: "200",
                msg: "success",
            });
        } catch (e){
            return res.json({
                statCode: "201",
                msg: "used email"
            })
        }
    } catch (e){
        console.log(e||e.stack)
        return res.json({
            statCode: "201",
            msg: "error user"
        })
    }
}