const exp = require('express')
const morgan = require('morgan')
const r = require('./routers')
const e = require('./e')
const er = require('./er')
const path = require('path')
//const ren = require('./ren')

const adm = require('./admin')
const cookieParser = require('cookie-parser')
const auth = require('./auth')
const front = require('./viws')

const app = exp()

app.use(exp.static(path.join(__dirname, 'public')))
app.use(cookieParser())

/*app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
*/
app.use(morgan('dev'))
app.use((r,s,n) => {
	console.log(Date.now())
	n()
})

 
app.use(exp.json())


app.use('/api/v1/news', r )
app.use('/', front)
app.post('/log', auth.adminlog)
app.use('/api/v1/admin', adm)
app.all('*', (req, res, n) => {
	n(new e(`gg ${req.originalUrl} gg`, 404))
})

app.use(er)

module.exports = app