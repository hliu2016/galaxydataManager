import preDB from  '../../utils/dbconnector'

/**
 * @param typename
 * @param owner
 * @param path
 * @returns {Promise}
 */
export function file_upload(typename, owner, path) {
    return new Promise(async (resolve, reject) => {
        try{
            //todo
            resolve()
        } catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}