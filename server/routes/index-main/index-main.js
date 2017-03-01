/**
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = (req, res, next) => {
    if(req.session.user){
        console.log("----------------------------------------------------111111")
        console.log(req.session.user)
        return res.redirect('/user')
    }else {
        return res.render('index-main/index-main')
    }
}