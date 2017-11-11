// Allows user to see earliest messages in the Chat room

const toTheTop = function () {
	document.getElementById("topOfChat").addEventListener("click", () =>{
		const modal = document.getElementById("modal_messages")
		modal.scrollTo(0,0)
	})
}

module.exports = toTheTop