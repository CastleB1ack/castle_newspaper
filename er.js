module.exports = (e, req, res, n) => {
	e.sc = e.sc || 500
	e.s = e.s || 'error'
	console.log(e.stack);
	res.status(e.sc).json({
		s: e.s,
		mes: e.message
	})} 