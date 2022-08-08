const mon = require('mongoose')
const v = require('validator')
const bcr = require('bcryptjs')


const usc = new mon.Schema({
	name: {
		type: String,
		required: [true, 'no name'],
		unique: true,
	},
	email: {
		type: String,
		required: [true, 'no Email'],
		unique: true,
		validate: [v.isEmail, 'e not v']
	}, 
	photo: {type: String},
	pass: {
		type: String,
		required: [true, 'no pass']
	},
	passConf: {
		type: String,
		required: [true, 'ccc'],
		validate: {
			validator: function(el) {return el === this.pass},
			message: "jjjjjjj"
		}
	},
	ch : Date
})



usc.pre('save', async function(next) {
	if (!this.isModified('pass')) {
		return next();}
	this.passConf = undefined
	this.pass = await bcr.hash(this.pass, 10)
	next()
})

usc.methods.chick = async function (ts, us) {
	return await bcr.compare(ts, us)
}

usc.methods.at = function(tim) {
	if (this.ch){
		ch = parseInt(this.ch.getTime() /1000, 10)
		console.log(ch, tim);	
		return tim < ch
	}
	return false
}

const user = mon.model('user', usc)



module.exports = user