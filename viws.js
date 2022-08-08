const exp = require('express')
const cont = require('./frontContr')
const auth = require('./auth')
r = exp.Router()


r.route('/').get(cont.allnews)

module.exports = r