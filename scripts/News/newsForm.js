

const newsForm = function () {
	const newsArticle = document.getElementById("dashboard")
	newsArticle.innerHTML = `
  <form>
  Url:
  <input id="url" type="text" name="url"><br>
  Title: 
  <input id="title" type="text" name="title">
  Synopsis:
  <input id="synopsis" type="text" name="synopsis">
  </form>
  <button id="news-submit">Submit</button>
  `
}

module.exports = newsForm