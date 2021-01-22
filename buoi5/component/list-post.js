class ListPost extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });

    firebase.firestore().collection("post").get()
      .then((snap) => {
        const users = getDataFromDocs(snap.docs);
        console.log(users);
        this._shadowDom.innerHTML = `
        
        <div id="content">
        ${users[2].content}
        </div>
        <post-item></post-item>
        <style>
        #content{
          font-size: 30px
        }
        </style>
        
            `;
      });
  }
}
function getDataFromDocs(docs) {
  return docs.map(getDataFromDoc);
}

function getDataFromDoc(doc) {
  const data = doc.data();
  data.id = doc.id;
  return data;
}

window.customElements.define("list-post", ListPost);
