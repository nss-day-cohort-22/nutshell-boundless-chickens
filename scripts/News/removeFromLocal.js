// const getData = require("./../Database/getDatabaseLocal")
// const setData = require("./../Database/setDatabaseLocal")

// newsInjection.addEventListener("click", function (event){
//     if (event.target.id.startsWith("delete_")) {


// // removes from local storage and database and refreshes inner HTML to appear on DOM
// newsInjection.addEventListener("click", function (event){
// 	if (event.target.id.startsWith("delete_")) {
// 		const currentNum = event.target.id.split("_")[1]
// 		// const newsEl = document.getElementById("delete_" + currentNum)
// 		const currentArt = event.target.id.split("_")[1]
// 		// const artEl = document.getElementById("article_" + currentArt)
// 		if (currentNum === currentArt) {
// 			// let newArticleArray = []
// 			const newsArticle = document.getElementsByClassName("articleDisplay")[0]
// 			event.target.parentNode.remove()
// 			console.log(currentNum)
// 			let newArticleArray = database.news.filter(function (newsObj) {
//                 return database.news.newsId !== currentNum
//             }) 
//             console.log(newArticleArray)
// 			database.news = newArticleArray 
// 			const localTest = localStorage.setItem("database.news", database.news)
// 			console.log(localTest)
// 		}
// 	}
// })