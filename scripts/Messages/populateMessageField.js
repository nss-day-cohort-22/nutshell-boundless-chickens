// Creates message modal


const populateMessageField = function () {
	document.getElementById("dashboard").innerHTML = `
    <article id="modal_messages">
    <span id="close">&times;</span>
      <section id="modal_content">
        <h3>Messages</h3>
        <article id="messages_inject">
        </article>
        Message:
        <input id="message_field" placeholder="your message here" maxlength="140">
        <button id="message_send">Send</button>
        <button id="editMessageButton">Edit Last Message</button>
        <button id="topOfChat">Earliest Messages</button>
        <button id="refreshChat">Refresh</button>
      </section>
    </article>
  `
}

module.exports = populateMessageField