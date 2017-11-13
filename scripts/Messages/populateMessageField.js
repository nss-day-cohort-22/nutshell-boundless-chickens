// Creates message modal

const populateMessageField = function () {
	document.getElementById("dashboard").innerHTML = `
    <article id="modal_messages">
    <span id="close">&times;</span>
      <section id="modal_content">
        <article id="messages_inject">
        </article>
        <div id="buttonWrap">
          <input id="message_field" placeholder="your message here" maxlength="140">
          <button id="message_send">Send</button>
          <button id="editMessageButton">Edit Last Message</button>
          <button id="topOfChat">Earliest Messages</button>
          <button id="refreshChat">Refresh</button>
        </div>
      </section>
    </article>
  `
}

module.exports = populateMessageField