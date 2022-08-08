class e extends Error {
	constructor(mass, sc) {
		super(mass);
		this.sc = sc
		this.s = 'faile'
		this.isop = true
		Error.captureStackTrace(this, this.constructor)
	}
}

module.exports= e 