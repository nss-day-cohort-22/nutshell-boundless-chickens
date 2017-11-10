

const newsForm = function () {
	const newsArticle = document.getElementById("news_section")
	newsArticle.innerHTML = `
  <form>
  Url:
  <input type="text" name="url"><br>
  Title: 
  <input type="text" name="title">
  Synopsis:
  <input type="text" name="synopsis">
  </form>
  <button>Submit</button>
  `
}

module.exports = newsForm