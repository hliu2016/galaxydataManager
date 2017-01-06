/**
 * @param req
 * @param res
 * @param next
 */


module.exports = async (req, res, next) => {
   if(req.session.user) {
      console.log(req.session.user)
      return res.render('dataplatform/homepage')
   }else{
      console.log("error")
      return res.send("please log in first")

   }
}
