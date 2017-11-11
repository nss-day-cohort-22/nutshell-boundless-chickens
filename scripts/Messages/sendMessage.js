const messageObj = require("./messageObjFactory")
const Db = require("./../Database/getDatabaseLocal")
const setDb = require("./../Database/setDatabaseLocal")
const displayMessages = require("./displaySentMessages")
const hide = require("./../Dashboard/hide")
const reveal = require("./../Dashboard/reveal")
// May not require these two
const refresh = require("./refreshMessages")
const repopulate = require("./populateMessageField")




// When send button is clicked, text field is evaluated and then sent through messageObj factory where it is then pushed to local storage

const postMessage = function () {
	const sendButton =  document.getElementById("message_send")
	const messageInput = document.getElementById("message_field")
	sendButton.addEventListener("click", sendFunction = () => {
		const messageValue = messageInput.value
		const parsedData = Db()
		parsedData.messages.push(messageObj(messageValue))
		setDb(parsedData)
		// clear field after sending
		messageInput.value = ""		
		// refresh the messages once sent 
		hide(document.getElementById("modal_messages"))
		reveal(document.getElementById("modal_messages"))
		// refresh()
		// repopulate()
		displayMessages()
		const modal = document.getElementById("modal_messages")
		modal.scrollTo(0, modal.scrollHeight)
		
		
	})
}

module.exports = postMessage