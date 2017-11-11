// May be useless .. 

const hideAll = function (except){
	document.getElementById("tasks_section").classList.add("hidden")
	document.getElementById("events_section").classList.add("hidden")
	document.getElementById("messages_section").classList.add("hidden")
	document.getElementById("news_section").classList.add("hidden")
	document.getElementById("friends_section").classList.add("hidden")
	document.getElementById(except).classList.remove("hidden")  
}

module.exports = hideAll