// Database for whole application
const landingPageObject = require("./../User/landingPageClick")

const eggshellDatabase = {
	"users": [],
	"messages": [],
	"news": [],
	"friends": [],
	"tasks": []
}
if(JSON.parse(localStorage.getItem("eggshellDatabase")) === null ){
	const stringyEgg = JSON.stringify(eggshellDatabase)
	localStorage.setItem("eggshellDatabase", stringyEgg)
}
// ensures that if there isn't an object in local storage, the blank one is put there, and ensures that it doesn't reset the local storage object if the database is already present
module.exports = eggshellDatabase

