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
                    "<p>请点击下面的链接进行您的邮箱激活：</p></br>" +
                    "<a href='127.0.0.1/email?isActived=True&actiCode=12345678'>www.witseq.com/email?isActived=True&actiCode=12345678</a>"
               })
            resolve(er)
        } catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}
