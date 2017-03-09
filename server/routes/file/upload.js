import * as model from '../../model/file/fileOperations'

module.exports = async (req, res, next) => {
    try {
        const { typename, owner } = req.body
        let path = ''
        await model.file_upload(typename, owner, path)
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
