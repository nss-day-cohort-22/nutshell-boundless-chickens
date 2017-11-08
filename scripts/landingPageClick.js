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
			//inster register function
			registration()
			document.querySelector("button").addEventListener("click", () =>{
				formToSession()
				// getDatabase()
				// eggshellDatabase.users.push(userObjectFactory())
				eggshellDatabase.users.push(userObjectFactory())
				setDatabase()
				console.log(eggshellDatabase)
        
        
			} )
		}

	}
}

module.exports = landingPageClick

