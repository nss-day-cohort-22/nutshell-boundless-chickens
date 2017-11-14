

const removeFriend = function (activeUser, friend, database) {
	const filterFriends = database.friends.filter((relationship)=>{
		let filter = true
		if(relationship.userId === activeUser.id && relationship.friendId === friend.id) {
			filter = false
		}
		return filter
	})
	database.friends = filterFriends
  
	alert("Friend Removed, reopen window to see changes")

}

module.exports = removeFriend