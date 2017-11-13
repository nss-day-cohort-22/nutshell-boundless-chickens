// Generates ids
const idMaker = function* (id) {

	while (true) {
		yield id + 1   
		id++
	}
}

// module.exports = idMaker
module.exports = idMaker