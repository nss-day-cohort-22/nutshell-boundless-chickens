console.log("IM HERE!")

const newsObject = require("./news-factory")
// const submitNews = document.getElementById(window)
// console.log(submitNews)

const newSubmitClick = function (event) {
	console.log("event fired!!!")
	if (event.target.id === "news-submit") {
		console.log("inside if!!!")
		const url = document.getElementById("url").value
		const title = document.getElementById("title").value
		const synopsis = document.getElementById("synopsis").value
    
		const newNews = newsObject(url, title, synopsis)
		console.log(newNews)
	}
} 
document.addEventListener("click", newSubmitClick)