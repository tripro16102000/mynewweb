class CreatePost extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
    this._shadowDom.innerHTML = `
       <div class ="create-post">
    <textarea id="content"></textarea>
    <button id="btn">post</button>
       </div>

       <style>
       textarea#content {
           width: 600px;
           height: 120px;
           border: 3px solid #cccccc
           padding: 5px;
           font-family: Tahoma, sans-serif;
           background-image: url("https://wallpapercave.com/wp/KQ1qA4s.jpg");
           background-position: bottom right;
           background-repeat: no-repeat;
       }
       

       </style>
        `;
    this._shadowDom.getElementById("btn").addEventListener("click", (e) => {
      e.preventDefault();
      const dataToAdd = {
        authorName: currentUser.displayName,
        createdAt: new Date().toISOString(),
        createdBy: currentUser.id,
        content: this._shadowDom.getElementById("content").value,
      };
      
      firebase.firestore().collection("post").add(dataToAdd);
    });
  }
}

window.customElements.define("create-post", CreatePost);
