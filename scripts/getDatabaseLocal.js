const eggShellDatabase = require("./eggshellDatabase")

const getDatabase = function () {
	return JSON.parse(localStorage.getItem("eggshellDatabase"))
}

module.exports = getDatabase