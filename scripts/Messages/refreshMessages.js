const refresh = function () {
	const modalArea = document.getElementById("modal_messages")
	const dash = document.getElementById("dashboard")
	dash.removeChild(modalArea)
}

module.exports = refresh