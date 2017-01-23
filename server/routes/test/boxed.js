/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */


import { a } from './script02'
module.exports = (req, res, next) => {
    res.send(a())
    console.log(a())
}
