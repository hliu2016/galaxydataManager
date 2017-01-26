import * as model from '../../model/signup/signup'

module.exports = async (req, res, next) => {
    const {isActived, actiCode} = req.query
    if(isActived && actiCode){
        try {
            await model.ActivateEmail()
            res.send('激活成功！')
        }catch (e){
            console.log(e||e.stack)
            res.send('发生错误！')
        }
    }else{
        res.send('发生错误！')
    }
}