const databaseForCurrentFriend =require("./../Database/getDatabaseLocal")

const currentFriends = function () {
	const activeUser= JSON.parse(sessionStorage.getItem("activeUser"))
	const Db = databaseForCurrentFriend()
	const activeUserFriendArray = Db.friends.filter((currentObj)=>{
		return currentObj.userId === activeUser.id 
	}) 
	console.log(activeUserFriendArray)
	// const matchedFriendObject = activeUserFriendArray.find((currentObjFromArray)=>{
	// 	return Db.users.find((match)=>{
	// 		return match.id === currentObjFromArray.friendId
	// 	})
	// })
	const matchedFriendObject = Db.users.filter((currentObjFromArray)=>{
		return activeUserFriendArray.find((currentObj) =>{
			return currentObjFromArray.id === currentObj.friendId 
		}) 
	})
	console.log(matchedFriendObject)
	document.getElementById("currentFriends").innerHTML= " <h2><u>Current Friends</u></h2> "
	matchedFriendObject.forEach((friendObject) =>{
		document.getElementById("currentFriends").innerHTML +=`
      <p><h2>${friendObject.username}</h2></p>
    `
	})
}

module.exports = currentFriends