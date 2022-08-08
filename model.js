const mon = require('mongoose')

const sc = new mon.Schema({
	post: {
		type: String,
		required: [true, 'no content']
	},
	imgs: {
		type: [String]
/*			validate: {
	default: 1,
			validator: function (e) {
				return 10 > e
			},
			message: 'error'
		}
	*/},

	videos: {type: [String]},
	par: {
		type: mon.Schema.ObjectId,
		ref: 'news'
	},
	createAt: {type: Number},
	tags: {type: [String], default: []},
	publish: {type: Boolean, default: false}
	},
	{
		toJSON: {virtuals: true},
		toObject: {virtuals: true}
	}
)



sc.virtual('child', {
	ref: 'news',
	foreignField: 'par',
	localField: '_id'
})

/*sc.virtual('ggggg').get(function() {
	return  'jjjjjjjjjjjj'
})*/

/*
//Save works with .save&.create (not update);; the keyword SAVE stand for doc middleware
sc.pre('save', function(next) {next()}); //this: the doc before saving 
sc.post('save', function(doc, next) {next()}) //this: the doc after saving 

//Find works with 'FIND' -NOT find one (not update);; the keyword FIND stand for The query that we trigger
sc.pre('find', function(next) {next()}); //this: the query before exect. ;; ex: this.find({name: 'g1'}) fillter 
sc.post('find', function(docs, next) {next()}) //this: the query after the query exect. 
*/



const n = mon.model('news', sc)

module.exports = n