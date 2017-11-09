// Creates user object

const idMaker = require("./../idGenerator")
const Db = require("./../Database/getDatabaseLocal")

const id = Db().users.length

const userId = idMaker(id)


const userObject = () => {
	const emailInfo = JSON.parse(sessionStorage.getItem("email"))
	const userInfo = JSON.parse(sessionStorage.getItem("username"))
	return Object.create(null, {
		"id": {
			value: userId.next().value,
			enumerable: true
		},
		"username": {
			value: userInfo,
			enumerable: true,
			writable : true
		},
		"email": {
			value: emailInfo,
			enumerable: true,
			writable : true
		}
	})
}

// Parses sessionStorage and passes it through userObject create

module.exports = userObject