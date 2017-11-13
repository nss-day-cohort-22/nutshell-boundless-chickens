const idMaker = require("./../idGenerator")
const userID = require("./../User/landingPageClick")
const newsForm = require("./populateNewsField")
const Db = require("./../Database/getDatabaseLocal")

const id = Db().news.length
const idForNews = idMaker(id)

const currentUser = JSON.parse(sessionStorage.getItem("activeUser")).username

const newsObjectBuilder = function (url, title, synopsis) {

	// const newsObject = () => {
	// const userId = JSON.parse(sessionStorage.getItem("username"))
	return Object.create(null, {
		"newsId": {
			//this will invoke the generator function
			value: idForNews.next().value,
			enumerable: true
		},
		"userId": {
			//this pulls from the current users ID
			value: currentUser,
			enumerable: true,
			writable : true
		},
		"url": {
			value: url,
			enumerable: true,
			writable : true				
		},
		"title": {
			value: title,
			enumerable: true,
			writable : true
		},
		"synopsis": {
			value: synopsis,
			enumerable: true,
			writable : true
		}
	})
	// }
}
module.exports = newsObjectBuilder

