// Generates a welcome message tailored to the activeUser's username

const welcomeMessage = function () {
	const userToGreet = JSON.parse(sessionStorage.getItem("activeUser"))
	document.getElementById("greeting").innerHTML = `
  <section><h1>Welcome back ${userToGreet.username}</h1></section>
  `
}

module.exports = welcomeMessage