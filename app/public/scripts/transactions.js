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

///////////////////////SORTING////////////////////////
const quantAsc = document.querySelector('#quantAsc')
const quantDesc = document.querySelector('#quantDesc')
const dateAsc = document.querySelector('#dateAsc')
const dateDesc = document.querySelector('#dateDesc')

let descAmaUl = document.querySelector('#descAmaUl')
let ascAmaUl = document.querySelector('#ascAmaUl')
let ascTimeUl = document.querySelector('#ascTimeUl')
let descTimeUl = document.querySelector('#descTimeUl')


quantAsc.addEventListener('click', function(){
	let ul = $('#main')
	let li = ul.children('li').get()

	li.sort((a,b) => {
		let aValue = parseInt($(a).find('.rightie .amount').text())
		let bValue = parseInt($(b).find('.rightie .amount').text())

		//console.log(aValue, bValue)
		
		return aValue - bValue
	})
	ul.empty()
	ul.append(li)
	
	dialog()
})

quantDesc.addEventListener('click', function(){
	let ul = $('#main')
	let li = ul.children('li').get()

	li.sort((a,b) => {
		let aValue = parseInt($(a).find('.rightie .amount').text())
		let bValue = parseInt($(b).find('.rightie .amount').text())

		//console.log(aValue, bValue)
		
		return bValue - aValue
	})
	ul.empty()
	ul.append(li)

	dialog()
})

dateAsc.addEventListener('click', function(){
	let ul = $('#main')
	let li = ul.children('li').get()

	li.sort((a,b) => {
		let aValue = $(a).find('.leftie .date').text()
		let bValue = $(b).find('.leftie .date').text()

		aValue = new Date(aValue)
		bValue = new Date(bValue)

		//console.log(aValue, bValue)
		
		return aValue - bValue
	})
	ul.empty()
	ul.append(li)

	dialog()
})

dateDesc.addEventListener('click', function(){
	let ul = $('#main')
	let li = ul.children('li').get()

	li.sort((a,b) => {
		let aValue = $(a).find('.leftie .date').text()
		let bValue = $(b).find('.leftie .date').text()

		aValue = new Date(aValue)
		bValue = new Date(bValue)

		//console.log(aValue, bValue)

		return bValue - aValue
	})
	ul.empty()
	ul.append(li)

	dialog()
})

//console.log(transactions)

/////////////////////// FILTERING ////////////////////////


//////////////////////////////////////////////

function dialog(){
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
			
			//document.URL + '/id/delete'


		})
	}

}

//dialog()