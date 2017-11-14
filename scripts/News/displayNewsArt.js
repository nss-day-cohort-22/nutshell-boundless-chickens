const getData = require("./../Database/getDatabaseLocal")
// Prints sent messages to the Dom
const setDatabase = require("./../Database/setDatabaseLocal")



const displayNews = function () {
	const newsInjection = document.getElementById("news-inject")
	const database = getData()
	database.news.sort((p,n) => n.newsId - p.newsId)
	database.news.forEach((current) => {
		newsInjection.innerHTML += `    
        <section id="article_${current.newsId}" class="articleDisplay">
		<h3 class="title">Title: ${current.title}</h3>
		<p class="url">Url: ${current.url}</p>
		<p class="synopsis">Description: ${current.synopsis}</p>
		<p class="date">Date: ${current.date}</p>
		<button id="delete_${current.newsId}">Delete</button>
        </section>    
		`
	})

	// removes from DOM and overwrites database
	newsInjection.addEventListener("click", function (event){
		if (event.target.id.startsWith("delete_")) {
			const currentNum = parseInt(event.target.id.split("_")[1])
			const currentArt = parseInt(event.target.id.split("_")[1])
			if (currentNum === currentArt) {
				const newsArticle = document.getElementsByClassName("articleDisplay")[0]
				event.target.parentNode.remove()
				let newArticleArray =  database.news.filter(function (newsObj) {
					return newsObj.newsId !== currentNum
				})
				database.news = newArticleArray 
				setDatabase(database)
			}
		}
	})
}

module.exports = displayNews