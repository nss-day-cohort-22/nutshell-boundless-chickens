const closeChat = require("./../Dashboard/closeModal")
const populateFriendModal = require("./populateFriendsModal")
const closeFriendModal = require("./../Dashboard/closeModal")
const friendSearch = require("./searchFriend")
const activeFriendsOfuser = require("./populateActiveFriends")

const userClickedFromChat = function () {
	const allUserClasses = document.getElementsByClassName("userTag")
  
	for (let i = 0; i < allUserClasses.length; i++) {
		let object = allUserClasses[i]
		object.addEventListener("click", () =>{
			const captureUserClick = object.innerHTML
			console.log(captureUserClick)
			document.getElementById("dashboard").innerHTML = ""
			populateFriendModal()
			activeFriendsOfuser()
			closeFriendModal()
			friendSearch()
			let friendSearchBarValue = document.getElementById("searchFriendValue").value    
			friendSearchBarValue = `${captureUserClick}`
		})
	}
}

module.exports = userClickedFromChat