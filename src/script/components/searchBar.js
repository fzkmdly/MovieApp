class searchBar extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode : 'open'})
    }

    connectedCallback(){
        this.render()
    }

    set clickEvent(event){
        this._event = event
        this.render()
    }

    get value(){
        return this.shadowDOM.querySelector('#inputMovie').value
    }

    render(){
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <style>
            .card-title {
                text-align: center;
            }
            
            .card-search {
                align-items: center;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            
            #inputMovie {
                height: 25px;
                width: 600px;
            }
            
            #buttonUpdate {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                height: 31px;
                background-color: #279EFF;
                color: white;
                border: solid 1px gray;
            }
            
            #buttonUpdate:hover {
                background-color: #164e7c;
                transition: 1s;
            }
        </style>
        <div class="card-header">
            <h3 class="card-title">Search Movie</h3>
        </div>
        <div class="card-search">
            <div class="form-group">
                <input id="inputMovie" type="text" class="form-control" placeholder="Enter Movie">
            </div>
            <div class="form-group">
                <button id="buttonSearch" class="btn btn-primary">Search 
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
        </div>
        `
        this.shadowDOM.querySelector('#buttonSearch')
            .addEventListener('click', this._event)
    }
}

customElements.define('search-bar', searchBar)