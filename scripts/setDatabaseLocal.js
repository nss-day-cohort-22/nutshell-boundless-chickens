const eggShellDatabase = require("./eggshellDatabase")
// Allows for whatever is to be pushed in as the modified database to be named through parameter
const setDatabase = function (toSet) {
	const stringy =	JSON.stringify(toSet)
	localStorage.setItem("eggshellDatabase", stringy)
}

module.exports = setDatabase