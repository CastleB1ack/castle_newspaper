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


const port = process.env.PORT || 8000
app.listen(port, () => {
	console.log('running...');}) 

 

  