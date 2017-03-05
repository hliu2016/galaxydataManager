import preDB from  '../../utils/dbconnector'

export function file_upload() {
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