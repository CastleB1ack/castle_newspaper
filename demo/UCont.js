const fs  = require('fs')
const n = require('./users')
const apifew = require('./apifew')
const e = require('./e')

const cn = fn => {
	return (req, res, next) => {
		fn(req, res, next).catch(next)
	}
}


//add queries when hit /top5
exports.f = cn(async (req, res, next) =>{
	req.query.l = 3
	req.query.f = 'pr'
	req.query.sort = '-pr'
	next()
	}
)

exports.dlnews = cn(async (req, res, next) => {
	await n.findOneAndDelete({_id : req.params.id})
	res.status(204).json({
		status: 'success',
		data: {
			news: null
		}})})

exports.upnews = cn(async (req, res, next) => { 
	/*const ne = await n.findOne({_id : req.params.id}).updateOne(req.body,{new:true})*/
	const ne = await n.findOneAndUpdate({_id : req.params.id}, req.body,{
		new: true, runValidators: true, context: 'query'})
	res.status(200).json({
		status: 'success',
		data: {
			news: ne
		}})})


exports.getonenews = cn(async (req, res, next) => {
	const ne = await n.findById(req.params.id)
	if (!ne) {
		return next(new e(`gggg`, 404)) ///////////error////////////////////////////////////////////
	}
	res.status(200).json({
		status: 'success',
		data: {
			news: ne
		}})})


exports.getnews = cn(async (req, res, next) => {
	const few = new apifew(n.find(), req.query).fillter().s().f().ls()
	ne = await few.qu
	res.status(200).json({
		status: 'success',
		data: {
			news: ne
		}})})

exports.postnews = cn(async (req,res, next) => {	 
	const ne = await n.create(req.body)
	res.status(201).json({
		status: 'success',
		data: {
			news: ne
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

