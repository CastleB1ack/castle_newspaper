class apifew {
	constructor(qu,qs) {
		this.qu = qu
		this.qs = qs 
	}

	fillter () {
		//fillter
		let qur = {...this.qs}
		const arr = ['page','sort','limit','field','s','f','l','sk']
		arr.forEach( el => delete qur[el]);
		qur = JSON.stringify(qur)
		qur = qur.replace(/\b(gte|gt|lt|lte)\b/g, el => `$${el}`)
		this.qu = this.qu.find(JSON.parse(qur))
		return this;
	}
	s() {
		//sort
		/*if(this.qs.s) {
			this.qu = this.qu.sort(this.qs.s.split(',').join(' '))//'x,-y' => 'x''-y' => 'x -y'
		} else {
			this.qu = this.qu.sort('-ct')
		}*/
		this.qu = this.qu.sort('-ct')
		return this
	}
	f() {
		//fields
		if(this.qs.f) {
			this.qu = this.qu.select(this.qs.f.split(',').join(' '))//'x,-y' => 'x''-y' => 'x -y'
		} else {
			this.qu = this.qu.select('-__v')
		}
		return this
	}
	ls(){
		//pages&limits
		this.qu = this.qu.limit(6).skip(this.qs.sk*1*6 || 0)//'123' *1 => 123 <int>
	return this
	}
}

module.exports = apifew