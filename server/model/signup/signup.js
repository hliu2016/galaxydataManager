import preDB from  '../../utils/dbconnector'

/**
 * @param userdata
 * @returns {Promise}
 */
export function register(userdata) {
    return new Promise(async (resolve, reject) => {
        try{
            let data = await preDB.one("INSERT INTO table(${this~}) VALUES(${one}, ${two})", {userdata, table: 'dc_user'})
            resolve(data)
        }catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}


