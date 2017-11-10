const idMaker = require("./../idGenerator")

const newsId = idMaker(newsId)

const newsObject = () => {
	// const userId = JSON.parse(sessionStorage.getItem("username"))
	return Object.create(null, {
		"newsId": {
			//this will invoke the generator function
			value: newsId.next().value,
			enumerable: true
		},
		// "userId": {
		// 	//this needs to pull from the current users ID
		// 	value: userId,
		// 	enumerable: true,
		// 	writable : true
		// },
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
}
