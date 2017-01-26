/**
 *
 */
import * as model from '../../model/signup/signup'

module.exports = async (req, res, next) => {
    const userdata = {username: req.body.username, email: req.body.email, password: req.body.password}
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
}