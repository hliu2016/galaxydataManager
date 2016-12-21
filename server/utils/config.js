import fs from 'fs'
/**
 *load configuration
 * param
 */
module.exports =  (path_name) => {
     return JSON.parse(fs.readFileSync(path_name));
}
