// Creates the html for both registration and login forms
const loginRegisterForm = function () {
	const loginRegisterArticle = document.getElementById("login_register")
	loginRegisterArticle.innerHTML = `
  <form>
  Username:
  <input type="text" name="username"><br>
  Email: 
  <input type="email" name="email">
  </form>
  <button>Submit</button>
  `
}

module.exports = loginRegisterForm