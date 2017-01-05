let pgp = require('pg-promise')()
const dbconfig =  {
        "username": "postgres",
        "password": "zhujiahao",
        "db_address": "115.159.38.41",
        "db_port": "5432",
        "dbname": "WitSeq"
}
const string = "postgres://" + dbconfig.username + ":" + dbconfig.password + "@" + dbconfig.db_address + ":" + dbconfig.port + "/" + dbconfig.dbname
let preDB = pgp(string)

export default preDB
