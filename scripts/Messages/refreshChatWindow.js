const display = require("./displaySentMessages")


const refreshChatWindow = function() {
	document.getElementById("refreshChat").addEventListener("click", () =>{
		document.getElementById("messages_inject").innerHTML =""
		display()
	})
}

module.exports = refreshChatWindow