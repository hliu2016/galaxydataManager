import nodemailer from '@nodemailer/pro'
import Promise from 'bluebird'

let conf = require('./config')('/Users/fuckingnoob/Documents/galaxydataManager/server/config/config.json')
let transporter = nodemailer.createTransport(conf.email_server)

/**
 * @param username
 */
 export default function mailer (email, acticode) {
    return new Promise(async (resolve, reject) => {
        try {
           let er = await transporter.sendMail(
               {
                "from": conf.email_server.auth.user,
                    "to": email,
                    "subject": "云舟生信邮箱验证",
                    "text": "云舟生信邮箱验证",
                    "html": "<b>亲爱的用户您好：</b></br>" +
                    "<p>为了不影响你的用户体验请点击下面按钮激活邮箱：</p></br>" +
                    "<a href='http://127.0.0.1:3000/email?isActived=True&actiCode=12345678' target='_blank'>立刻激活邮箱</a>"
               })
            resolve(er)
        } catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}
