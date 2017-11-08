const eggShellDatabase = require("./eggshellDatabase")

const setDatabase = function () {
	const stringyBase =	JSON.stringify(eggShellDatabase)
	localStorage.setItem("eggshellDatabase", stringyBase)
}

module.exports = setDatabase