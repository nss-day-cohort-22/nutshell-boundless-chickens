const Db = require("./../Database/getDatabaseLocal")

// Prints sent messages to the Dom, and adds an add user affordance

const displaySent = function () {
	const messagesInjection = document.getElementById("messages_inject")
	const database = Db()
	database.messages.forEach((current)=>{
		messagesInjection.innerHTML += `
		<u><h3 class="userTag">${current.userId}</h3></u>
		<p class="userMessage">${current.message}</p>
		`
	})	
}

module.exports = displaySent