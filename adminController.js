const m = require('multer');
const n = require('./model')
const apifew = require('./apifew')
const e = require('./e')
const sharp = require('sharp')

const cn = fn => {
	return (req, res, next) => {
		fn(req, res, next).catch(next)
	}
}

const k = m.memoryStorage()
const upload = m({
	storage: k,
	limits: {fileSize: 20*1000*1000}
})


exports.upimgs = upload.fields(
	[{name: 'imgs'},
	{name: 'mp4'}
	])

exports.resize =  cn(async (req, res, next) => {
	if (!req.files.imgs) return next()
	if (req.params.id){
		const post = await n.findById(req.params.id)
		if (!post) return next(new e(`gggg`, 404)) }

	req.body.imgs = []
	await Promise.all(
		req.files.imgs.map(async (img, i) => {
			const filename = `date;${Date.now()}-post;${req.postid || req.params.id }-;${i+1}.jpeg`;

			await sharp(img.buffer)
				.resize(720, 430)
				.toFormat('jpeg')
				.jpeg({quality: 90})
				.toFile(`/public/imgs/posts/${filename}`)
			req.body.imgs.push(filename)
		})
		)
	next()
})


exports.getnews = cn(async (req, res, next) => {
	const few = new apifew(n.find({"tags": {"$in": req.body.tags}}), req.query).ls().s()
	post = await few.qu
	res.status(200).json({ 
		status: 'success',
		data: {
			news: post
		}})})

exports.postnews = cn(async (req,res, next) => {
	let {post, tags} = req.body
	if(typeof tags === "string") {
		tags = `${tags},all`
		tags = tags.split(",")
	} else {
		tags.push("all")
	}
	const thePost = await n.create({post, tags, createAt: Date.now()})
	req.postid = thePost._id
	next()
	})
 
exports.finalpost = cn(async (req, res, next) => { 
	/*const ne = await n.findOne({_id : req.params.id}).updateOne(req.body,{new:true})*/
	const post = await n.findOneAndUpdate({_id : req.postid}, {'imgs': req.body.imgs} ,{
		new: true, context: 'query'})
	res.status(200).json({
		status: 'success',
		data: {
			news: post
		}})})

exports.dlnews = cn(async (req, res, next) => {
	await n.findOneAndDelete({_id : req.params.id})
	res.status(204).json({
		status: 'success',
		data: {
			news: null
		}})})

exports.getonenews = cn(async (req, res, next) => {
	const post = await n.findById(req.params.id)
	if (!post) {
		return next(new e(`gggg`, 404)) ///////////error////////////////////////////////////////////
	}
	res.status(200).json({
		status: 'success',
		data: {
			news: post
		}})})

//get  
exports.getConnectedNews = cn(async (req, res, next) => {
	const post = await n.findById(req.params.id).populate({path: 'child'})
	if (!post) {
		return next(new e(`gggg`, 404)) ///////////error////////////////////////////////////////////
	}
	res.status(200).json({
		status: 'success',
		data: {
			news: post
		}})})

exports.upnews = cn(async (req, res, next) => {
	if (req.body.tags) {
	if (typeof req.body.tags === "string") {
		req.body.tags = `${req.body.tags},all`.split(",")
	} else {
		req.body.tags.push("all")
	}}
	const post = await n.findOneAndUpdate({_id : req.params.id}, req.body,{
		new: true, runValidators: true, context: 'query'})
	console.log(req.body)
	res.status(200).json({
		status: 'success',
		data: {
			news: post
		}})})



exports.getstats =cn(async (req,res, next) => {
	ne = await n.aggregate([
		{
			$match: {pr: {$gte:1}} //stage 1 the resultes goes to the stage 2
		},
		{
			$group: {
				_id: '$pr',
				numNews: {$sum: 1},
				numPr: {$sum: '$pr'}
			}
		}
	])
	res.status(201).json({
		status: 'success',
		data: {
			news: ne
		}})})


