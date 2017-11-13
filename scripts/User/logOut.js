const showLogoutButton = require("./../Dashboard/reveal")
//Reveals the logout button and applies event listener to log user out

const logOut = function () {
	showLogoutButton(document.getElementById("logoutButton"))
  
	document.getElementById("logoutButton").addEventListener("click", () =>{
		sessionStorage.removeItem("activeUser")
		location.reload(true)
	})
}

module.exports = logOut