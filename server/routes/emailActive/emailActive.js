/**
 * @param req
 * @param res
 * @param next
 */
import mailer from '../../utils/emailer'
import uuidV1 from 'uuid/v1'

module.exports = async (req, res, next) => {
    try {
        const { email } = req.body
        await mailer(email, uuidV1())
        return res.json({
            stateCode: '200',
            msg: 'ok'
        })
    }catch (e){
        console.log(e||e.stack)
        return res.json({
            stateCode: '201',
            msg: 'error email'
        })
    }
}