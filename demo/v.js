const n = require('./model')



const cn = fn => {
	return (req, res, next) => {
		fn(req, res, next).catch(next)
	}
}



exports.over = cn(async (req,res) => {
	const all = await n.find().select('-__v')

	res.render('news', {
		name:'all News',
		all
	})
})

exports.one = (req,res) => {
	res.render('one', {
		user: 'kkk'
	})
}
