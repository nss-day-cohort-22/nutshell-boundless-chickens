const hideAllExcept = require("./../Dashboard/hideAll_except")
const newsForm = require("./../News/newsForm")

const newsSectionTarget = function () {
	document.getElementById("news_section").addEventListener("click", () => {
		// hideAllExcept("news_section")
		newsForm()
	})
}



module.exports = newsSectionTarget

