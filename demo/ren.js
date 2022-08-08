const exp = require('express')
const v = require('./v')

r = exp.Router()

r.get('/', v.over)
r.get('/one', v.one)
 
module.exports = r