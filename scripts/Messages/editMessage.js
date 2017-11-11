const DbForEditing = require("./../Database/getDatabaseLocal")
const setBackAfterEdit = require("./../Database/setDatabaseLocal")
const refreshEdit = require("./../Dashboard/hide")
const editedMessage = require("./../Dashboard/reveal")
const displayEdit = require("./displaySentMessages")

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
		if (matchedMessage.message.includes("has joined the chat")){
			alert("Cannot edit a join message")
		}else {
			textField.value = matchedMessage.message
			document.getElementById("message_send").removeEventListener("click",sendFunction)
			document.getElementById("message_send").addEventListener("click", () => {
				// textField.value = matchedMessage.message      
				matchedMessage.message = textField.value
				console.log(matchedMessage)
				setBackAfterEdit(matchedMessage)
				setBackAfterEdit(Db)
				alert("edited, close window and open again to see")
				// textField.value =""
				refreshEdit(document.getElementById("modal_messages"))
				displayEdit()
				editedMessage(document.getElementById("modal_messages"))
				const modal = document.getElementById("modal_messages")
				modal.scrollTo(0, modal.scrollHeight)
				document.getElementById("message_send").addEventListener("click",sendFunction)
			})
		}
		// if most recent message evaluated contains "has joined the chat" then throw an error
    
	})   
}

module.exports = editMessage