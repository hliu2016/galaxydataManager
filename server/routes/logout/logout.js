/**
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    req.session.user = null
    return res.redirect('/')
}
