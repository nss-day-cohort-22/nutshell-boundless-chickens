// const hideAllExcept = require("./../Dashboard/hideAll_except")
const newsForm = require("./../News/populateNewsField")
const reveal = require("./../Dashboard/reveal")
const newSubmitClick = require("./newsSubmitClick")
const closeModal = require("./../Dashboard/closeModal")

const newsSectionTarget = function () {
	document.getElementById("news_section").addEventListener("click", () => {
		reveal(document.getElementById("dashboard"))
		newsForm()
		newSubmitClick()
		closeModal()
	})
}



module.exports = newsSectionTarget

