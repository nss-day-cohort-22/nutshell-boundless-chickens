const messageObj = require("./messageObjFactory")
const Db = require("./../Database/getDatabaseLocal")
const setDb = require("./../Database/setDatabaseLocal")
const displayMessages = require("./displaySentMessages")
const closeModal = require("./../Dashboard/closeModal")
const populateMessageField = require("./populateMessageField")
const hide = require("./../Dashboard/hide")
const reveal = require("./../Dashboard/reveal")



// When send button is clicked, text field is evaluated and then sent through messageObj factory where it is then pushed to local storage

const postMessage = function () {
	const sendButton =  document.getElementById("message_send")
	const messageInput = document.getElementById("message_field")
	return sendButton.addEventListener("click", () => {
		const messageValue = messageInput.value
		const parsedData = Db()
		parsedData.messages.push(messageObj(messageValue))
		setDb(parsedData)
		// clear field after sending
		messageInput.value = ""		
		// refresh the messages once sent 
		displayMessages()
		hide(document.getElementById("modal_messages"))
		reveal(document.getElementById("modal_messages"))		
		const modal = document.getElementById("modal_messages")
		modal.scrollTo(0, modal.scrollHeight)
		
		
	})
}

module.exports = postMessage