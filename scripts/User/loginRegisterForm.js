// Creates the html for both registration and login forms
const loginRegisterForm = function () {
	const loginRegisterArticle = document.getElementById("login_register")
	loginRegisterArticle.innerHTML = `
  <form>
  Username:
  <input type="text" name="username" required><br>
  Email: 
  <input type="email" name="email" required>
  </form>
  <button>Submit</button>
  `
}

module.exports = loginRegisterForm