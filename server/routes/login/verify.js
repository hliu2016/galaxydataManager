/**
 * Created by fuckingnoob on 2016/12/22.
 */
module.exports = (req, res, next) => {
    let {email, password} = req.body
    if(password) {
        res.send({url: '/user'})
    }else{
        res.send('error')
    }
}