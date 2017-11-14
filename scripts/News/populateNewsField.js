// Creates news modal
// put all content in modal_content and code where the news messages will be inserted

const populateNewsField = function () {
	document.getElementById("dashboard").innerHTML = `
    <article id="article-form">
    <span id="close">&times;</span>
      <section id="modal_content">
          <h3>Add your news article here</h3>
          <div id="news-field">
          Url:
          <input id="url" type="text" name="url"><br>
          Title: 
          <input id="title" type="text" name="title">
          Synopsis:
          <input id="synopsis" type="text" name="synopsis">
          </div>
          <button id="news-submit">Submit</button>
          <div id="news-inject"></div>
      </section>
    </article>
  `
}

module.exports = populateNewsField