const friendFound = function (friend) {
	document.getElementById("searchFriendsResult").innerHTML =`
  <p> Add ${friend} as a friend?</p><button id="addFriendButton">Add</button>
  `
}
module.exports = friendFound