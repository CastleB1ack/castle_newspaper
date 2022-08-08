/*s = (...a)=> {for (i of a) {console.log(i)}}
// async function a (){
// 	w = await fetch('js.json')
// 	s(w)   
// }
async function h () {
	r = await fetch('http://127.0.0.1:8000/u/2', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "posts":"6666","users":"bruh"})
  })
	f = await r.json()
	s(f)
}
h()*/
// a = new XMLHttpRequest()
// a.open('GET','js.json')
// a.onload = function () {

// 	s(JSON.parse(a.responseText))
// }
// a.send(JSON.stringify({"kk":"kk"}))






// f = new XMLHttpRequest()
// f.open('GET','https://breakingbadapi.com/api/episodes')
// f.onload = function () {
// 	s(f.responseText)}
