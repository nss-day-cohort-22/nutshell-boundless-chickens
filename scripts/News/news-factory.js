const idMaker = require("./../idGenerator")
const userID = require("./../User/landingPageClick")
const newsForm = require("./populateNewsField")
const Db = require("./../Database/getDatabaseLocal")
const dateStamp = require("./date")



const newsObjectBuilder = function (url, title, synopsis) {
	const id = Db().news.length
	const idForNews = idMaker(id)

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
			value: JSON.parse(sessionStorage.getItem("activeUser")).username,
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
		},
		"date": {
			value: dateStamp(),
			enumerable: true,
			writable : true
		}
	})
	// }
}
module.exports = newsObjectBuilder

