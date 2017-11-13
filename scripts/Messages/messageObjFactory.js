const idMaker = require("./../idGenerator")
const Db = require("./../Database/getDatabaseLocal")

// Generates the messge object to be pushed in to local storage

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