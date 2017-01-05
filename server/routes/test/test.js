/**
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
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
    // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
    // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
    // if (req.cookies.isVisit) {
    //     console.log(req.cookies);
    //     res.send("再次欢迎访问");
    // } else {
    //     res.cookie('isVisit', 1, {maxAge: 60 * 1000});
    //     res.send("欢迎第一次访问");
    // }
}
