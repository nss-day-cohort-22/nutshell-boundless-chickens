const DbForEditing = require("./../Database/getDatabaseLocal")
const setBackAfterEdit = require("./../Database/setDatabaseLocal")
const refreshEdit = require("./../Dashboard/hide")
const editedMessage = require("./../Dashboard/reveal")

// Checks to ensure that the user has not selected a message they have not sent, or a 'Joined chat' message. Populates the textfield with the most recently sent message from the user and allows it to be changed then inserted. 

const editMessage = function () {
	const textField = document.getElementById("message_field")
	const editButton =	document.getElementById("editMessageButton")
	editButton.addEventListener("click", () =>{
		console.log("A go for editing")
		textField.value = ""
		const Db = DbForEditing()
		let messageToGrab = Db.messages.length
		let matchedMessage = Db.messages.find((current) =>{
			return current.id === messageToGrab
		})
		let activeUser = JSON.parse(sessionStorage.getItem("activeUser"))
		if (matchedMessage.message.includes("has joined the chat") || matchedMessage.userId !== activeUser.username){
			alert("Cannot edit a join message/ previous message has been active too long  ")
		}else {
			textField.value = matchedMessage.message
			document.getElementById("message_send").removeEventListener("click",sendFunction)
			document.getElementById("message_send").addEventListener("click", editSend = () => {
				matchedMessage.message = textField.value
				setBackAfterEdit(matchedMessage)
				setBackAfterEdit(Db)
				alert("edited, close window and open again or send another message to see")
				textField.value =""
				refreshEdit(document.getElementById("modal_messages"))
				editedMessage(document.getElementById("modal_messages"))
				const modal = document.getElementById("modal_messages")
				modal.scrollTo(0, modal.scrollHeight)
				document.getElementById("message_send").addEventListener("click",sendFunction)
				document.getElementById("message_send").removeEventListener("click", editSend)				
			})
		}
	})   
}

module.exports = editMessage
