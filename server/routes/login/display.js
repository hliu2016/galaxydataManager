/**
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    if(req.session.username){
        return res.redirect('/user')
    }else {
        return res.render('login/login')
    }
}
