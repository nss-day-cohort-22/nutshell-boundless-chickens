const Db = require("./../Database/getDatabaseLocal")
// Prints sent messages to the Dom

const displaySent = function () {
	const messagesInjection =document.getElementById("messages_inject")
	const database = Db()
	database.messages.forEach((current)=>{
		messagesInjection.innerHTML += `
			<h4>User: ${current.userId}<h4>
			<p>${current.message}</p>
		`
	})
	
}

module.exports = displaySent