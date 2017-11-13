const idMaker = require("./../idGenerator")
const Db = require("./../Database/getDatabaseLocal")

// Creates friendObject and feeds in the friend's id as a parameter

const friendObject = (friendId) => {
	const currentUser = JSON.parse(sessionStorage.getItem("activeUser")).id
	
	return Object.create(null, {
		"userId": {
			value: currentUser,
			enumerable: true
		},
		"friendId": {
			value: friendId,
			enumerable: true,
			writable : true
		}
	})
    
}

module.exports = friendObject