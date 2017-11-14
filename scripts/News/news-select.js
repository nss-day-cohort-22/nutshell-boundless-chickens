const newsForm = require("./../News/populateNewsField")
const reveal = require("./../Dashboard/reveal")
const newSubmitClick = require("./newsSubmitClick")
const closeModal = require("./../Dashboard/closeModal")
const displayNews = require("./displayNewsArt")

const newsSectionTarget = function () {
	document.getElementById("news_section").addEventListener("click", () => {
		reveal(document.getElementById("dashboard"))
		newsForm()
		newSubmitClick()
		document.getElementById("news-inject").innerHTML =""
		displayNews()
		closeModal()
	})
}

module.exports = newsSectionTarget

