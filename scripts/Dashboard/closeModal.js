const closeCurrentModal = function () {
	const closeButton = document.getElementById("close")
	const modalArea = document.getElementById("modal_messages")
	const dash = document.getElementById("dashboard")
	closeButton.addEventListener("click", () =>{
		dash.removeChild(modalArea)
		// modalArea.style.display = "none"
	})
}

module.exports = closeCurrentModal