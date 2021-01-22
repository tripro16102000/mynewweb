class PostItem extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: "open"})
        this._shadowDom.innerHTML = `
        cccc
        `
    }
}

window.customElements.define('post-item',PostItem)