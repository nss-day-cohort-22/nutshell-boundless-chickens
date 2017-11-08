// Generates Unique Id's for all of application

const idMaker = function* (startFrom = 0) {
	let id = 1

	while (true) {
		yield id + startFrom
		id++
	}
}

module.exports = idMaker