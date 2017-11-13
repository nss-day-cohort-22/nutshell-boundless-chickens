const populateFriendModal = require("./populateFriendsModal")
const revealDashboardForFriend = require ("./../Dashboard/reveal")
const closeFriendModal = require("./../Dashboard/closeModal")
const friendSearch = require("./searchFriend")

const friendsSectionClicked = function () {
	document.getElementById("friends_section").addEventListener("click", () =>{
		revealDashboardForFriend(document.getElementById("dashboard"))
		populateFriendModal()
		closeFriendModal()
		friendSearch()
    
    
	})
}

module.exports = friendsSectionClicked