import preDB from  '../../utils/dbconnector'

/**
 * @param userdata
 * @returns {Promise}
 */
export function register(userdata) {
    return new Promise(async (resolve, reject) => {
        try{
            await preDB.none("INSERT INTO dc_user(${this~}) VALUES(${id}, ${username}, ${email}, ${password})",
                {
                    id: '2',
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


