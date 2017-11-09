// Database for whole application
const landingPageObject = require("./../User/landingPageClick")

const eggshellDatabase = {
	"users": [],
	"messages": [],
	"news": [],
	"friends": [],
	"tasks": []
}
module.exports = eggshellDatabase
// ensures that if there isn't an object in local storage, the blank one is put there, and ensures that it doesn't reset the local storage object if the database is already present
if(JSON.parse(localStorage.getItem("eggshellDatabase")) === null ){
	const stringyEgg = JSON.stringify(eggshellDatabase)
	localStorage.setItem("eggshellDatabase", stringyEgg)
}

// const eggshellDatabase = {
// 	"users": [
// 		{ "id": 1, "username": "Steve", "email": "me@me.com" },
// 		{ "id": 2, "username": "Mark", "email": "you@you.com" },
// 		{ "id": 3, "username": "Krista", "email": "foo@foo.com" }
// 	],
// 	"messages": [
// 		{ "id": 1, "userId": 1, "message": "What's up?" }
// 	],
// 	"news": [
// 		{ "id": 1, "userId": 2, "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/", "note": "Check out this recent discovery about workholes" }
// 	],
// 	"friends": [
// 		{ "userId": 1, "friendId": 3 },
// 		{ "userId": 1, "friendId": 2 }
// 	],
// 	"tasks": [
// 		{ "id": 1, "userId": 3, "task": "Take out garbage" }
// 	]
// }