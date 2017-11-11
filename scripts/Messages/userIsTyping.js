// Checks if the user has entered anything yet, if they have, 'User has joined chat room' will not display

const userType= function () {
	if (messageKeyupRecording.length > 0){
		return true
	}else {
		return false
	}
}


module.exports = userType