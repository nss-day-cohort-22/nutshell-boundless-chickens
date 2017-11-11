// Creates message modal, and supplies option to close


const populateMessageField = function () {
	document.getElementById("dashboard").innerHTML = `
    <article id="modal_messages">
      <section id="modal_content">
        <span id="close">&times;</span>
        <h3>Messages</h3>
        <article id="messages_inject">
        </article>
        Message:
        <input id="message_field" placeholder="your message here" maxlength="140">
        <button id="message_send">Send</button>
        <button id="editMessageButton">Edit Last Message</button>
        <button id="topOfChat">Earliest Messages</button>
      </section>
    </article>
  `
}

module.exports = populateMessageField