const exp = require('express')
const cont = require('./contr')
const auth = require('./auth')

r = exp.Router()
 

/*r.route('/top5').get(cont.f,cont.getnews)
*/
/*r.route('/stats').get(cont.getstats)
*/


r.route('/:id').get(cont.getonenews)
r.route('/con/:id').get(cont.getConnews)
r.route('/').post(cont.getnews)


//.post(cont.postnews)

module.exports = r
