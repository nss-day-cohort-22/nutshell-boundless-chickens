const newsObject = require("./news-factory")
const populateNews = require("./populateNewsField")

const newSubmitClick = function () {
	document.addEventListener("click", (event) => {
		if (event.target.id === "news-submit") {
			const url = document.getElementById("url").value
			const title = document.getElementById("title").value
			const synopsis = document.getElementById("synopsis").value
		
			const newNews = newsObject(url, title, synopsis)
			console.log(newNews)
		}
	} )
}

module.exports = newSubmitClick

