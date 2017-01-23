import preDB from  '../../utils/dbconnector'

export function signin_validate(userdata) {
    return new Promise(async(resolve, reject) => {
        try{
            let qr = await preDB.manyOrNone('SELECT * FROM dc_user WHERE email=${email} AND password=${password}',
                {
                    email: userdata.email,
                    password: userdata.password
                })
            resolve(qr)
        }catch (e){
            console.log(e)
            reject(e)
        }
    })
}
