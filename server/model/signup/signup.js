import preDB from  '../../utils/dbconnector'

/**
 *
 * @returns {Promise}
 */
 export function show() {
    return new Promise(async(resolve, reject) => {
        try{
            let data = await preDB.query('select * from user_tbl')
            resolve(data)
        }catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}
export function c() {
    return new Promise(async(resolve, reject) => {
        try{
            resolve()
        }catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}


