import * as model from '../../model/signup/signup'

module.exports = async (req, res, next) => {
    const {isActived, actiCode} = req.query
    if(isActived && actiCode){
        try {
            await model.ActivateEmail()
            res.render('index-main/email-confirm')
        }catch (e){
            console.log(e||e.stack)
            res.render('error')
        }
    }else{
        res.render('error')
    }
}