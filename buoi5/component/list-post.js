import { getDataFromDocs } from '../utility.js'
const style = `
.container{
  width: 60%;
  margin: auto;
}

`
class ListPost extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
    this.renderHtml()

  }
  async renderHtml() {
    const res = await firebase.firestore().collection('post').get()
    this.listPost = getDataFromDocs(res.docs)
    let html = ''
    for (const item of this.listPost) {
      html += `<post-item content="${item.content}" author="${item.authorName}" createdAt ="${item.createdAt}"></post-item>
 
      
      
      
      `
    }

    this._shadowDom.innerHTML = `
    <style>
    ${style}
    </style>
<div class="container">
    ${html}
    </div>
    
    
    `;

  }
}




window.customElements.define("list-post", ListPost);
