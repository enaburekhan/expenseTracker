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

/////////////////SORTING////////////////////////
const quantAsc = document.querySelector('#quantAsc')
const quantDesc = document.querySelector('#quantDesc')
const dateAsc = document.querySelector('#dateAsc')
const dateDesc = document.querySelector('#dateDesc')

let ul = document.querySelectorAll('ul')

let descAmaUl = document.querySelector('#descAmaUl')
let ascAmaUl = document.querySelector('#ascAmaUl')
let ascTimeUl = document.querySelector('#ascTimeUl')
let descTimeUl = document.querySelector('#descTimeUl')


quantAsc.addEventListener('click', function(){
	//document.body.style.backgroundColor = 'red'
	for(let i=0; i<ul.length; i++){
		if(ul[i].classList.contains('invisible') == false){
			ul[i].classList.toggle('invisible')
		}
	}
	ascAmaUl.classList.remove('invisible')
})

quantDesc.addEventListener('click', function(){
	//document.body.style.backgroundColor = 'orange'
	for(let i=0; i<ul.length; i++){
		if(ul[i].classList.contains('invisible') == false){
			ul[i].classList.toggle('invisible')
		}	
	}
	descAmaUl.classList.remove('invisible')

})

dateAsc.addEventListener('click', function(){
	//document.body.style.backgroundColor = 'green'
	for(let i=0; i<ul.length; i++){
		if(ul[i].classList.contains('invisible') == false){
			ul[i].classList.toggle('invisible')
		}	
	}
	ascTimeUl.classList.remove('invisible')
})

dateDesc.addEventListener('click', function(){
	//document.body.style.backgroundColor = 'blue'
	for(let i=0; i<ul.length; i++){
		if(ul[i].classList.contains('invisible') == false){
			ul[i].classList.toggle('invisible')
		}	
	}
	descTimeUl.classList.remove('invisible')

})

//console.log(transactions)