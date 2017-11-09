const eggShellDatabase = require("./eggshellDatabase")
// Retrieves the database from local storage for modification
const getDatabase = function () {
	return  JSON.parse(localStorage.getItem("eggshellDatabase"))
}

module.exports = getDatabase