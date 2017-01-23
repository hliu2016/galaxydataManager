import nodemailer from '@nodemailer/pro'
import Promise from 'bluebird'

let conf = require('./config')('/Users/fuckingnoob/Documents/galaxydataManager/server/config/config.json')
let transporter = nodemailer.createTransport(conf.email_server)

 export default function mailer () {
    return new Promise(async (resolve, reject) => {
        try {
           let er = await transporter.sendMail(conf.mailOptions)
            resolve(er)
        } catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}
