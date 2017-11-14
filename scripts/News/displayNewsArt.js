const getData = require("./../Database/getDatabaseLocal")
// Prints sent messages to the Dom

const displayNews = function () {
	const newsInjection = document.getElementById("news-inject")
	const database = getData()
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
	newsInjection.addEventListener("click", function (event){
		if (event.target.id.startsWith("delete_")) {
			const currentNum = event.target.id.split("_")[1]
			const newsEl = document.getElementById("delete_" + currentNum)
			const currentArt = event.target.id.split("_")[1]
			const artEl = document.getElementById("article_" + currentArt)
			if (currentNum === currentArt) {
				const newsArticle = document.getElementsByClassName("articleDisplay")[0]
				event.target.parentNode.remove()
				console.log(event)
			}
		}
	})
}

module.exports = displayNews