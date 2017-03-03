import * as model from '../../model/diseaseInfo/diseaseType'
import fs from 'fs'

module.exports = async (req, res, next) => {
    const diseaseInfo = { diseaseType: req.body.diseaseType }
    try {

    }catch (e){
        console.log(e||e.stack)
    }
}
