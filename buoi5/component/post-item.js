const style =`
.item-container{
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px
}
.author{
    font-size: 25px
}   

.content{
    font-size:30px
}
.createdAt{
    font-size:10px
}
`

class PostItem extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: "open"})
        this.content = this.getAttribute('content')
        this.author = this.getAttribute('author')
        this.createdAt = this.getAttribute('createdAt')
        this._shadowDom.innerHTML = `
    
<style>
${style}
</style>

        <div class="item-container">
        <div class="author">${this.author}</div>
        <div class="content">${this.content}</div>
        <div class="createdAt">${this.createdAt}</div>
        </div>
        `
    }
}

window.customElements.define('post-item',PostItem)