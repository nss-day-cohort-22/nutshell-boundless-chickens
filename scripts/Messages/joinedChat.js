const messageObj = require("./messageObjFactory")
const Db = require("./../Database/getDatabaseLocal")
const setDb = require("./../Database/setDatabaseLocal")
const showJoinMessage = require("./displaySentMessages")
const hide = require("./../Dashboard/hide")
const reveal = require("./../Dashboard/reveal")

// Generates a 'Joined chat' message to be sent when message section is clicked on, 
const joinedChat = function () {
	const input = document.getElementById("message_field")  
	input.value = `${JSON.parse(sessionStorage.getItem("activeUser")).username} has joined the chat.`		
	const joinedMessageValue = input.value
	const databaseForJoinMessage = Db()
	databaseForJoinMessage.messages.push(messageObj(joinedMessageValue))
	setDb(databaseForJoinMessage)
	// refresh the messages once sent 
	showJoinMessage()
	const modal = document.getElementById("modal_messages")
	modal.scrollTo(0, modal.scrollHeight)
	hide(document.getElementById("modal_messages"))
	reveal(document.getElementById("modal_messages"))
	input.value =""
}

module.exports = joinedChat