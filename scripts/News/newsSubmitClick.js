console.log("IM HERE!")

const newsObject = require("./news-factory")
// const submitNews = document.getElementById(window)
// console.log(submitNews)

const newSubmitClick = function (event) {
	if (event.target.id === "news-submit") {
		const url = document.getElementById("url").value
		const title = document.getElementById("title").value
		const synopsis = document.getElementById("synopsis").value
    
		const newNews = newsObject(url, title, synopsis)
		console.log(newNews)
	}
} 
document.addEventListener("click", newSubmitClick)