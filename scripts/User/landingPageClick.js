// Function for button click from landing page

const registration = require("./register")
const login = require("./login")
const formToSession = require("./landingPageFormValues")
const userObjectFactory = require("./usersObjectFactory")
const eggshellDatabase = require("./../Database/eggshellDatabase")
const getDatabase = require("./../Database/getDatabaseLocal")
const setDatabase = require("./../Database/setDatabaseLocal")
const hide = require("./../Dashboard/hide")
const reveal = require("./../Dashboard/reveal")

const landingPageClick = function () {
	const loginRegisterArticle = document.getElementById("login_register")
	const navigation = document.getElementById("navigation")
	loginRegisterArticle.addEventListener("click", loginRegisterClickEvent)
	function loginRegisterClickEvent() {
		if (event.target.id.startsWith("login")){
			// Insert login function
			login()
			document.querySelector("button").addEventListener("click", () =>{
				const emailValidation = document.querySelector("input[name='email']").value
				const usernameValidation = document.querySelector("input[name='username']").value
				const userDatabase = getDatabase()
				const foundAccount = userDatabase.users.find((object) => {
					return object.email === emailValidation && object.username === usernameValidation
				})
				if (foundAccount){
					const stringyUserObject = JSON.stringify(foundAccount)
					sessionStorage.setItem("activeUser", stringyUserObject)
					hide(loginRegisterArticle)
					reveal(navigation)
					// Display dashboard
				} else {
					alert("Username/Email not recognized. YOU SHALL NOT PASS!!")
				}
			})
		} else if (event.target.id.startsWith("register")){
			//insert register function
			registration()
			document.querySelector("button").addEventListener("click", () =>{
				const emailValidation = document.querySelector("input[name='email']").value
				const usernameValidation = document.querySelector("input[name='username']").value
				const parsedDatabase = getDatabase()
				// Ensures no one can register blank fields
				if (emailValidation === "" || usernameValidation === ""){
					alert("No blank fields!!")
				}else{
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
						alert("Account created! Log in to get started now!")
						location.reload(true)
					}
				}
			} )
		}

	}
}

module.exports = landingPageClick

