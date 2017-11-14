// adds the inital setup for the friends section

const populateFriendsModal = function () {
	document.getElementById("dashboard").innerHTML= `
  <article id="modal_messages">
  <span id="close">&times;</span>
    <section id="modal_content">
      <article id="currentFriends">
      </article>
      <article id="searchFriendsResult">
      </article>
      <input type="text" id="searchFriendValue">
      <button id="searchForFriend">Search</button>
    </section>
  </article>
`
}

module.exports = populateFriendsModal