const Db = require("./../Database/getDatabaseLocal")
// Prints sent messages to the Dom

const displaySent = function () {
	const messagesInjection =document.getElementById("messages_inject")
	const database = Db()
	database.messages.forEach((current)=>{
		messagesInjection.innerHTML += `
			<h3 class="userTag">User: ${current.userId}</h3>
			<p class="userMessage">${current.message}</p>
		`
	})
	
}

module.exports = displaySent