
const cn = fn => {
	return (req, res, next) => {
		fn(req, res, next).catch(next)
	}
}

exports.allnews = cn(async (req, res, next) => {

	
	res.status(200).sendFile('index.html', {root: __dirname})
})