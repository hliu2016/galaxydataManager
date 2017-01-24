import nodemailer from '@nodemailer/pro'
import Promise from 'bluebird'

let conf = require('./config')('/Users/fuckingnoob/Documents/galaxydataManager/server/config/config.json')
let transporter = nodemailer.createTransport(conf.email_server)

/**
 * @param username
 */
 export default function mailer (username) {
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
