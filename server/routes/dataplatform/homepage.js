/**
 * @param req
 * @param res
 * @param next
 */


module.exports = async (req, res, next) => {
   if(req.session.user)
      return res.render('dataplatform/homepage',{username: req.session.user})
   else
      return res.send("please log in first")
}
