class footerBar extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <div class="copyright">
            &copy; 2023 Your Company Name. All rights reserved.
        </div>    
        `
    }
}

customElements.define('footer-bar', footerBar)