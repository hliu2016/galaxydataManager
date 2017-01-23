import preDB from  '../../utils/dbconnector'

export function signin_validate(userdata) {
    return new Promise(async(resolve, reject) => {
        try{
            let qr = await preDB.db.oneOrNone(query, values)
            resolve(qr)
        }catch (e){
            console.log(e)
            reject(e)
        }
    })
}
