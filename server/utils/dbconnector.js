let db_conf = require('./config')('/Users/fuckingnoob/Documents/galaxydataManager/server/config/config.json')
let pgp = require('pg-promise')()

const config =  {
        "host": db_conf.db.host,
        "port": db_conf.db.port,
        "user": db_conf.db.user,
        "password": db_conf.db.password,
        "database": db_conf.db.database
}

let preDB = pgp(config)

export default preDB
