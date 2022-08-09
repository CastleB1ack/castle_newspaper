const app = require('./app')
const dot = require('dotenv')
const mon = require('mongoose')


dot.config({path: './config.env'})

db = process.env.DATA


/* , {
	useNewUrlParser: true,
	useCreatIndex: true,
	useFindAndModify: false
	} */

mon.connect(db).then(console.log('Connected!!!'))


const port = process.env.PORT || 8000
const server = app.listen(port, () => {
	console.log('running...');}) 

 
process.on('SIGTERM', () => {
	console.log('***** going to shutDown')
	server.close(() => console.log('process shutDown'))
	}
)
  