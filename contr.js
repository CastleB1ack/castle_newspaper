const n = require('./model')
const apifew = require('./apifew')
const e = require('./e')

const cn = fn => {
	return (req, res, next) => {
		fn(req, res, next).catch(next)
	}
}


exports.getnews = cn(async (req, res, next) => {

	const few = new apifew(n.find({
		"tags":{"$nin": req.body.nottags, "$in": req.body.tags || ["all"]}, 'publish': 'true'}),req.query).ls().s()
	post = await few.qu
	res.status(200).json({
		status: 'success',
		data: {
			news: post
		}})})

exports.getonenews = cn(async (req, res, next) => {
	const post = await n.findById(req.params.id)
	if (!post || !post.pup) {
		return next(new e(`gggg`, 404)) ///////////error////////////////////////////////////////////
	}
	res.status(200).json({
		status: 'success',
		data: {
			news: post
		}})})

exports.getConnews = cn(async (req, res, next) => {
	const post = await n.findById(req.params.id).populate({path: 'child'})
	if (!post || !post.pup) {
		return next(new e(`gggg`, 404)) ///////////error////////////////////////////////////////////
	}
	res.status(200).json({
		status: 'success',
		data: {
			news: post
		}})})

