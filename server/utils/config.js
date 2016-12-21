var fs = require('fs');

/**
 *load configuration
 * param
 */
module.exports = function (path_name) {
     return JSON.parse(fs.readFileSync(path_name));
}
