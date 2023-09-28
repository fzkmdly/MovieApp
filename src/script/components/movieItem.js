class movieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set movie(movie){
        this._movie = movie;
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML =`
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <style>
            .movie-cards {
                height: 40rem;
                border: solid 1px gray;
                width : 300px;
                margin : 5px;
                border-radius: 150% / 10%;

                display: flex;
                flex-direction: column;
            }

            .movie-cards > img {
                width : 300px;
            }

            .movie-cards > div {
                display : flex;
                flex-direction: column;
                margin-top: 15px;
            }

            .movie-cards > h3 {
                width: 300px;
                overflow: auto;
                text-align: center;
            }

            </style>
            <div class="movie-cards">
                <h3>${this._movie.Title}</h3>
                <img src="${this._movie.Poster}">
                <div>
                    <span>Year : ${this._movie.Year}</span>
                    <a href="#" id="see-details-link">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_right
                        </span>
                        See Details
                    </a>
                </div>
            </div>
        `;

    }
}

customElements.define('movie-item', movieItem)