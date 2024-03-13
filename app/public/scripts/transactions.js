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
