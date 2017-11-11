const populateMessageField = require("./populateMessageField")
const reveal = require("./../Dashboard/reveal")
const sendMessage = require("./sendMessage")
const closeModal = require("./../Dashboard/closeModal")
const toTop = require("./toTopOfChat")

const messageSectionTarget = function () {
	const dashboardSection = document.getElementById("dashboard")
	const messageSection = document.getElementById("messages_section")
	messageSection.addEventListener("click", () => {
		reveal(dashboardSection)
		populateMessageField()
		sendMessage()
		closeModal()
		toTop()
	})
}

module.exports = messageSectionTarget