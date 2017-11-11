const populateMessageField = require("./populateMessageField")
const reveal = require("./../Dashboard/reveal")
const sendMessage = require("./sendMessage")
const closeModal = require("./../Dashboard/closeModal")
const toTop = require("./toTopOfChat")
const hasJoinedChat = require("./joinedChat")
const userIsTyping = require("./userIsTyping")

const messageSectionTarget = function () {
	const dashboardSection = document.getElementById("dashboard")
	const messageSection = document.getElementById("messages_section")
	messageSection.addEventListener("click", () => {
		reveal(dashboardSection)
		populateMessageField()
		const messageKeyupRecord = document.getElementById("message_field")
		messageKeyupRecording = document.getElementById("message_field").value
		messageKeyupRecord.addEventListener("keyup", userIsTyping())
		console.log(userIsTyping())
		// joined Chat
		if(!userIsTyping()){
			hasJoinedChat()
			sendMessage()
			closeModal()
			toTop()
		}else {
			sendMessage()
			closeModal()
			toTop()
		}
	})
}

module.exports = messageSectionTarget
