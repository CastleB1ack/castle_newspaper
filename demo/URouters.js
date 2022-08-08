const exp = require('express')
const cont = require('./UCont')
const auth = require('./auth')


r = exp.Router()

r.route('/signup').post(auth.signup)
r.route('/login',).post(auth.login)
r.post('/rest', auth.prot, auth.rest)

r.route('/top5').get(cont.f,cont.getnews)

r.route('/stats').get(cont.getstats)


r.route('/:id').get(cont.getonenews).patch(cont.upnews).delete(cont.dlnews)
r.route('/').post(cont.postnews).get(cont.getnews)



module.exports = r
