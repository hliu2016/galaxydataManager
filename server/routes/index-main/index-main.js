/**
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = (req, res, next) => {
    if(req.session.username){
        return res.redirect('/user')
    }else {
        return res.render('index-main/index-main')
    }
}