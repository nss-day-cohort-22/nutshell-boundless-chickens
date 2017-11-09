// Captures form values in login and register

const formValues = function () {
	const username = document.querySelector("input[name='username']").value
	const email = document.querySelector("input[name='email']").value
	const emailString = JSON.stringify(email)
	const usernameString = JSON.stringify(username)
	sessionStorage.setItem("username", usernameString)
	sessionStorage.setItem("email", emailString)
}

module.exports = formValues