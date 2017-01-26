import preDB from  '../../utils/dbconnector'

/**
 * @param userdata
 * @returns {Promise}
 */
export function register(userdata) {
    return new Promise(async (resolve, reject) => {
        try{
            await preDB.none("INSERT INTO dc_user(${this~}) VALUES(${username}, ${email}, ${password})",
                {
                    username: userdata.username,
                    email: userdata.email,
                    password: userdata.password
                })
            resolve()
        }catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}
/**
 * @returns {Promise}
 * @constructor
 */
export function ActivateEmail() {
    return new Promise(async (resolve, reject) => {
        try{
            await preDB.none('UPDATE dc_user set isActived = 1')
            resolve()
        }catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}


