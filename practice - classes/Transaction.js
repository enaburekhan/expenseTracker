class balance {
	constructor(){
		this.balance = 0
		this.transactions = []
	}

	addTransaction(transaction){
		this.transactions.push(transaction)
	}

	getTransactions(){
		return this.transactions
	}

}

class categoryApp {
	constructor(index){
		this.enums = ['bill', 'food', 'home']
		this.index = index
	}

	getCategories(){
		return this.enums
	}
}

class Transaction {
	constructor(amount, description, category){
		this.amount = amount
		this.description = description
		this.category = new categoryApp(category)
		this.date = Date.now()
	}

	printTransaction(){
		console.log(this.amount)
	}	
}

let food = new Transaction(-10, 'taco bell', 1)
let bill = new Transaction(-500, 'water', 0)
let studentLoan = new Transaction(-1000, 'paying off loans', 0)

let bankAccount = new balance()
bankAccount.addTransaction(food)
bankAccount.addTransaction(bill)
bankAccount.addTransaction(studentLoan)

food.printTransaction()

console.log(bankAccount.getTransactions())
console.log(food)