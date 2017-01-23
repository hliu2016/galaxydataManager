let conf = require('./config')('/Users/fuckingnoob/Documents/galaxydataManager/server/config/config.json')
let pgp = require('pg-promise')()

const config =  {
        "host": conf.db.host,
        "port": conf.db.port,
        "user": conf.db.user,
        "password": conf.db.password,
        "database": conf.db.database
}

let preDB = pgp(config)

export default preDB
