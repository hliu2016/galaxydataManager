/**
 *
 */
import pg from 'pg'
module.exports = (username, password, db_address, port, dbname) => {
    try {
        const string = "tcp://" + username + ":" + password + "@" + db_address + ":" + port + "/" + dbname
        new pg.Client(string).connect()
    }catch (e){
        console.log(e||e.stack)
    }
}