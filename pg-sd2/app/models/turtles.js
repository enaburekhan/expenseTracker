class Turtle {
	constructor(name, color, weapons){
		this.name = name,
		this.DOB = new Date(),
		this.color = color,
		this.weapon = weapons
	}

	getTurtle(){
		return `${this.name} (${this.color} one) master of ${this.weapon}`
	}

	setDOB(date){
		this.DOB = date
	}
}

module.exports = Turtle