const fs = require('fs');
const http = require('http')
const url = require('url')
s = require('superagent')
x = Date.now()

co = fi => {
	return new Promise((r, g) => {
		console.log('fi');
		r('gg')
	})}

read = fi => {
	return new Promise((r, g) => {
		fs.readFile(fi,'utf-8',(er, d) => {
			if (er) g(er)
			r(d)})})}

write = (fi, d) => {
	return new Promise((r, g) => {
		fs.writeFile(fi, d, (er, d) => {
			if (er) {g(er)}
			r('d')
		})})}

dogs = async () => {
	try {
		const d = await read(`${__dirname}/k.txt`)
		const r = await s.get(`https://dog.ceo/api/breed/${d}/images/random`)
		console.log(r.body.message)
		await write('dogs.txt', r.body.message)
		console.log(Date.now() -x);
	} catch(e) {
		console.log(e);
		throw e
	}
	return 'xxxxxxxxxxx'
}
d = async () => {
	try {
		console.log('x')
		const y = await dogs()
		return y
	} catch(e) {
		console.log(e);
	}
}

const ser = http.createServer((reg, res) => {
	d()
	res.end(y)
}


ser.listen(8000, '127.0.0.1', ()=>{
	console.log('fuuuuuuu')
}
/*fs.readFile(`${__dirname}/k.txt`,"utf-8", (e,d) => {
	console.log(d)
	s.get(`https://dog.ceo/api/breed/${d}/images/random`).end((e,r) => {
		console.log(r.body.message)
		fs.writeFile('dogs.txt', r.body.message, err => {
			console.log('ra saved')
			fs.readFile(`${__dirname}/dogs.txt`,"utf-8", (e,d) => {
				console.log(d)
				})
			})
		})
	}
);*/
/*i = JSON.parse(k)
const ser = http.createServer((reg, res) => {
	if (reg.url == "/api") {	
		res.riteHead(200, {'Content-Type':'application/json'})
		res.wend(k)
	}
	else {
		res.end('fuck u')
	}
});*/

/*
})*/




/*
l = 'gggggggggg'
fs.writeFileSync('k.txt',l)

k = fs.readFileSync('k.txt', 'utf-8');
console.log(k);*/