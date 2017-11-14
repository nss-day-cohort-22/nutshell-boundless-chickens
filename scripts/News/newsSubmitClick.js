const newsObject = require("./news-factory")
const populateNews = require("./populateNewsField")
const getData = require("./../Database/getDatabaseLocal")
const setData = require("./../Database/setDatabaseLocal")
const displayNews = require("./displayNewsArt")

const newSubmitClick = function () {
	document.addEventListener("click", (event) => {
		if (event.target.id === "news-submit") {
			const url = document.getElementById("url").value
			const title = document.getElementById("title").value
			const synopsis = document.getElementById("synopsis").value
			const date = document.getElementById("date")

		
			// parses from eggshell database and display in inner HTML
			const parsedData = getData()
			parsedData.news.push(newsObject(url, title, synopsis, date))
			setData(parsedData)
			document.getElementById("news-inject").innerHTML =""
			displayNews()


		}
		
	} )
}

module.exports = newSubmitClick

