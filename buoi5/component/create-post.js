import {uploadFile} from "../utility.js";
 
class CreatePost extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
    this._shadowDom.innerHTML = `
       <div class ="create-post">
    <textarea id="content"></textarea>
    <input id="file" type="file">
    <button id="btn">post</button>
       </div>

       <style>
       textarea#content {
         margin-top: 10px;
         margin-left: 270px;
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
    this._shadowDom.getElementById("btn").addEventListener("click", async (e) => {
      if(content.trim())
      e.preventDefault();
      const file = this._shadowDom.getElementById("file")
      let fileurl = ''
      if(file.files.length > 0){
        fileurl = await uploadFile(file.files[0])
        console.log(fileurl)
      }
      const dataToAdd = {
        authorName: currentUser.displayName,
        createdAt: new Date().toISOString(),
        createdBy: currentUser.id,
        content: this._shadowDom.getElementById("content").value,
        image: fileurl
      };
      
   await   firebase.firestore().collection("post").add(dataToAdd);
   this._shadowDom.getElementById("content").value = ""
    });
  }
}

window.customElements.define("create-post", CreatePost);
