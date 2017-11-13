const databaseForFriend = require("./../Database/getDatabaseLocal")
const objectGenerate = require("./friendsObject")
const setDataBack = require("./../Database/setDatabaseLocal")
const friendToAdd = require("./foundFriendDisplay")

const searchFriend  = function () {
	document.getElementById("searchForFriend").addEventListener("click", () =>{
		let friendSearchBarValue = document.getElementById("searchFriendValue").value
		const activeUser = JSON.parse(sessionStorage.getItem("activeUser"))
		const activeUserName = activeUser.username
		const friendData = databaseForFriend()
		const findObject = friendData.users.find((userObjects) => {
			return userObjects.username.toLowerCase() === friendSearchBarValue.toLowerCase()
		})
		console.log(findObject)
		const activeUserFriendArray = friendData.friends.filter((currentObj)=>{
			return currentObj.userId === activeUser.id 
		}) 
		console.log(activeUserFriendArray)
		const existingFriend = activeUserFriendArray.find((current)=>{
			return current.friendId === findObject.id
		})
		console.log(existingFriend)
		if (findObject === null || findObject === undefined){
			alert("User not found, try again")
		}else if (friendSearchBarValue.toLowerCase() === activeUserName.toLowerCase()){
			alert("Are you your only friend?")
		} else if (( existingFriend !== undefined) && activeUserFriendArray.length !== 0) {
			alert("User is already a friend")
		} else {
			friendToAdd(findObject.username)
			document.getElementById("addFriendButton").addEventListener("click", () =>{
				alert("Friend Added!")
				friendData.friends.push(objectGenerate(findObject.id)) 
				setDataBack(friendData)
				document.getElementById("searchFriendsResult").innerHTML=""
			})
		}
    
	})
}

module.exports = searchFriend