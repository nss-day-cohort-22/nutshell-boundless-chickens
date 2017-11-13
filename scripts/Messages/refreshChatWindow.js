const display = require("./displaySentMessages")

// Adding refresh functionality to the refresh button

const refreshChatWindow = function() {
	document.getElementById("refreshChat").addEventListener("click", () =>{
		document.getElementById("messages_inject").innerHTML =""
		display()
		const modal = document.getElementById("modal_messages")
		modal.scrollTo(0, modal.scrollHeight)
	})
}

module.exports = refreshChatWindow