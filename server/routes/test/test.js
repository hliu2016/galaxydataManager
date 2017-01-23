/**
 * @param req
 * @param res
 * @param next
 */
import { a } from './script02'
module.exports = (req, res, next) => {
    console.log(a())
    //检查 session 中的 isVisit 字段
    //如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
    if(req.session.isVisit) {
        req.session.isVisit++
        res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>')
    } else {
        req.session.isVisit = 1
        res.send("欢迎第一次来这里")
        console.log(req.session)
    }
}
