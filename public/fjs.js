sk = 0




/*document.querySelector('.h').addEventListener('submit', e => {
	e.preventDefault()
	e = document.getElementById('e').value;
	p = document.getElementById('p').value;
	login(e, p)
})
*/
const posts = async (tags) => {
	try {
		res = await axios({
		method: 'POST',
		url: `https://tranquil-dusk-74753.herokuapp.com/api/v1/news?sk=${sk}`,
		data: {
			tags 
		}
	})
	++sk
	console.log(res.data.data.news)
	return res
	} catch(e) {
		console.log(e);
	}
	
}




window.onload = async () => {
	post = await posts(["all"])
	post.data.data.news.forEach((e) => {
		div = document.getElementById('posts')
		div.insertAdjacentHTML('beforeend', `<div class="col-xs-12 col-sm-4">
			<div class="card"><a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"><img src="/imgs/posts/${e.imgs[0]}" /></a><div class="card-content"><p class="">${e.post}</p></div><div class="card-read-more"><a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn btn-link btn-block">${e.tags.join("#      ")}#</a></div></div></div>`)
	})
}
 