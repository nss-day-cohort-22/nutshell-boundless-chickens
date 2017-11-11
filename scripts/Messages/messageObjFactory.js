const idMaker = require("./../idGenerator")
const Db = require("./../Database/getDatabaseLocal")
// const currentMessage = require("./sendMessage")



const messageObject = (message) => {
	const id = Db().messages.length
	const messageId = idMaker(id)
	const currentUser = JSON.parse(sessionStorage.getItem("activeUser")).username
	
	return Object.create(null, {
		"id": {
			value: messageId.next().value,
			enumerable: true
		},
		"userId": {
			value:currentUser ,
			enumerable: true,
			writable : true
		},
		"message": {
			value: message,
			enumerable: true,
			writable : true
		}
	})
}

module.exports = messageObject