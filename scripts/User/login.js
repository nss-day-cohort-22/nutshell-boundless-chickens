//function to print form to dom when login button is selected

const loginRegisterForm = require("./loginRegisterForm")
const login = function () {
	const loginRegisterArticle = document.getElementById("login_register")
	loginRegisterForm()
}

module.exports = login