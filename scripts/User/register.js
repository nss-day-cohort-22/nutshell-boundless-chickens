// function to print form to dom when register button is selected
const loginRegisterForm = require("./loginRegisterForm")

const registration = function () {
	const loginRegisterArticle = document.getElementById("login_register")
	loginRegisterForm()
  
}

module.exports = registration