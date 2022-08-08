/* const u = require('./users') */
const jwt = require('jsonwebtoken')
const e = require('./e')
const {promisify} = require('util')

const ct = id => {return jwt.sign({id}, process.env.K)}



const cn = fn => {
	return (req, res, next) => {
		fn(req, res, next).catch(next)
	}
}


exports.adminlog = cn(async (req, res, next) => {

	const {email, pass} = req.body
	if (!(email === process.env.E) || !(pass === process.env.P)) {return next(new e(`gggg`, 500))}

	token = ct('role: admin')

	res.status(201).cookie('token', token).json({done: "done"})

})


exports.prot = cn(async (req, res, next) => {
	let token;
	if (req.cookies.token) {
		token = req.cookies.token
	}
	if (!token) return next(new e('not auth', 401))

	await promisify(jwt.verify)(token, process.env.K)
	next()
})





/*exports.signup = cn(async (req, res, next) => {
	r = req.body
	const newUser = await u.create({name:r.name, email: r.email, pass: r.pass, passConf: r.passConf, ch: r.ch});
	const token = ct(newUser._id)

		res.status(201).cookie('token', token).json({
		status: 'success',
		token,
		data: {
			user: newUser
		}
	})
})

exports.login = cn(async (req, res, next) => {
	const us = await u.findOne({email})

	if(!us || !(await us.chick(pass, us.pass))) return next(new e(`gggg`, 404))

	token = ct(us._id)

	res.status(201).cookie('token', token).json({
		status: 'success'})
})

exports.up = cn(async (req, res, next) => {
	
	res.status(201).json({
		status: 'success'})
})*/

/*
exports.rest = cn(async (req, res, next) => {
	const {pastpass, passConf, pass} = req.body
	if(!pastpass || !passConf || !pass) return next(new e('ikkkkkkk', 401))
	us = req.usk
	if(!(await us.chick(pastpass, us.pass))) return next(new e(`gggg`, 404))
	us.pass = pass;
	us.passConf = passConf
	await us.save()
	const token = ct(us._id)
	res.status(201).json({
		status: 'success',
		us,
		data: {
			token 
		}
	})
})
*/