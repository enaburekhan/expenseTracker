const dots = document.querySelectorAll('.dots');
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', function() {
		let options = dots[i].nextElementSibling
		options.classList.toggle('invisible')
		
	});
}

let options = document.querySelectorAll('.options')
for (let i=0; i<options.length; i++){
	let o = options[i].childNodes
	//o.forEach(j => j.addEventListener('click', ()=> options[i].classList.toggle('invisible')))
	for(let j=0; j<o.length; j++){
		o[j].addEventListener('click', function(){
			options[i].classList.toggle('invisible')
		})
	}
}

//////////////////////////////////////////////

const del = document.querySelectorAll('#delete')
const dialog = document.querySelector('dialog')
const close = document.querySelector('#close')
const submit = document.querySelector('#submit')

for(let i=0; i<del.length; i++){
	del[i].addEventListener('click', function(){
		const storage = document.querySelector('.storage')
		const info = del[i].parentNode.parentNode.previousSibling.lastChild
		const secret = document.querySelector('#secret')

		storage.innerHTML = ''
		storage.append(info.cloneNode(true))

		//console.log(info.firstChild)
		
		secret.setAttribute('value', info.firstChild.innerHTML)
		
		console.log(secret)

		dialog.showModal()
		
		document.URL + '/id/delete'


	})
}

close.addEventListener('click', function(){
	dialog.close()
})

//////////SORTING////////////////////////

