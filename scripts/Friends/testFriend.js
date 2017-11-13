const objectCreation = require("./friendsObject")
const setIt = require("./../Database/setDatabaseLocal")

const testFriend = function () {
	const testerBase =  JSON.parse(localStorage.getItem("eggshellDatabase"))
	testerBase.friends.push(objectCreation(2))
	setIt(testerBase)
}

module.exports = testFriend