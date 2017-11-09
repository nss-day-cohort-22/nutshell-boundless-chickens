// Function for button click from landing page

const registration = require("./register")
const login = require("./login")
const formToSession = require("./landingPageFormValues")
const userObjectFactory = require("./usersObjectFactory")
const eggshellDatabase = require("./eggshellDatabase")
const getDatabase = require("./getDatabaseLocal")
const setDatabase = require("./setDatabaseLocal")

const landingPageClick = function () {
	const loginRegisterArticle = document.getElementById("login_register")
	loginRegisterArticle.addEventListener("click", loginRegisterClickEvent)
	function loginRegisterClickEvent() {
		if (event.target.id.startsWith("login")){
			// Insert login function
			login()
      
			// document.querySelector("")
		} else if (event.target.id.startsWith("register")){
			//insert register function
			registration()
			document.querySelector("button").addEventListener("click", () =>{
				const emailValidation = document.querySelector("input[name='email']").value
				const usernameValidation = document.querySelector("input[name='username']").value
				const parsedDatabase = getDatabase()
				// Checks email and username field to ensure they arent used in local storage already 
				if(parsedDatabase.users.find((object) => {
					return object.email === emailValidation 
				}) || parsedDatabase.users.find((object)=>{
						return object.username === usernameValidation
					})){
					alert("Username or Email is already in use")
				}else {
					formToSession()
					parsedDatabase.users.push(userObjectFactory())
					// CLear session storage and push the userObjectFactory into session storage?^
					setDatabase(parsedDatabase)
					// Show dashboard and hide form in index.html
				}
        
			} )
		}

	}
}

module.exports = landingPageClick

