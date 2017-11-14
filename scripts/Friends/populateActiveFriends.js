const databaseForCurrentFriend =require("./../Database/getDatabaseLocal")
const setDataBackNewFriends = require("./../Database/setDatabaseLocal")
const removeSelectedFriend = require("./removeFriend")
// Adds the active friends to the friends html


const currentFriends = function () {
	const activeUser= JSON.parse(sessionStorage.getItem("activeUser"))
	const Db = databaseForCurrentFriend()
	const activeUserFriendArray = Db.friends.filter((currentObj)=>{
		return currentObj.userId === activeUser.id 
	}) 
	const matchedFriendObject = Db.users.filter((currentObjFromArray)=>{
		return activeUserFriendArray.find((currentObj) =>{
			return currentObjFromArray.id === currentObj.friendId 
		}) 
	})
	document.getElementById("currentFriends").innerHTML= " <h2><u>Current Friends</u></h2> "
	matchedFriendObject.forEach((friendObject) =>{
		document.getElementById("currentFriends").innerHTML +=`
      <p><h2>${friendObject.username}</h2></p><button id="user_${friendObject.username}">Remove Friend</button>
		`
	})
	document.getElementById("currentFriends").addEventListener("click", (event) => {
		if (event.target.id.startsWith("user_")){
			const currentuser = event.target.id.split("_")[1]
			const stringUser = JSON.stringify(currentuser)
			const matchedUser = Db.users.find((currentUser)=>{
				return currentUser.username.includes(currentuser)
			})
			removeSelectedFriend(activeUser,matchedUser, Db)
			setDataBackNewFriends(Db)

		}
	})
}

module.exports = currentFriends