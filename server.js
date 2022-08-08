const app = require('./app')
const dot = require('dotenv')
const mon = require('mongoose')


dot.config({path: './config.env'})

db = process.env.DATA




mon.connect(db, {
	useNewUrlParser: true,
	useCreatIndex: true,
	useFindAndModify: false
	}).then(console.log('Connected!!!'))



app.listen(8000, () => {
	console.log('running...');}) 

 

  