import preDB from  '../../utils/dbconnector'

export function signin_validate(userdata) {
    return new Promise(async(resolve, reject) => {
        try{
            let qr = await preDB.oneOrNone('SELECT * FROM dc_user WHERE email=${email}',
                {
                    email: userdata.email,
                })
            resolve(qr)
        }catch (e){
            console.log(e||e.stack)
            reject(e)
        }
    })
}
