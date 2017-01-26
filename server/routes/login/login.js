/**
 * @param req
 * @param res
 * @param next
 */
import * as model from '../../model/login/login'

module.exports = async (req, res, next) => {
    const userinfo = { email: req.body.email, password: req.body.password }
    let qr = await model.signin_validate(userinfo)
    if (qr) {
        if(qr.password != userinfo.password){
            return res.json({
                "statCode": '201',
                "msg": 'error pwd'
            })
        }
        req.session.user = qr.username
        return res.json({
            "statCode": '200',
            "msg": 'success',
            "url": '/user'
        })
    }
    return res.json({
            "statCode": '201',
            "msg": 'no user'
        })
}
