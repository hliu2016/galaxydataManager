import * as model from '../../model/file/fileOperations'

module.exports = async (req, res, next) => {
    try {


        //todo
        return res.json({
            'stateCode': '200',
            'msg': 'success'
        })
    } catch (e){
        console.log(e||e.stack)
        return res.json({
            'stateCode': '201',
            'msg': 'error'
        })
    }
}
