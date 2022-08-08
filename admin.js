const exp = require('express')
const adminController = require('./adminController')
const auth = require('./auth')


r = exp.Router()





/*
const k = m.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public')
	},
	filename: (req, file, cb) => {
		const ext = file.mimetype.split('/')[1];
		cb(null, `user-${Date.now()}.${ext}`)
}})
*/



/*r.route('/:id').get(cont.getonenews).patch(cont.upnews).delete(cont.dlnews)
*/
r.use(auth.prot)
r.route('/').post(adminController.getnews)
r.route('/con/:id').get(adminController.getConnectedNews)
r.route('/create').post(adminController.upimgs, adminController.postnews, adminController.resize, adminController.finalpost)
r.route('/:id').get(adminController.getonenews)
 .post(adminController.upimgs, adminController.resize, adminController.upnews)
module.exports = r