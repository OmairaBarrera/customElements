export class myMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <style rel="stylesheet">
                @import "./components/myMenu.css";
            </style>
            <div class="h7">${this.texto()}</div>
        `
    }
    texto(){
        return `Hola`
    }
}
customElements.define("my-h7", myMenu);