import './movieItem.js'

class movielist extends HTMLElement {
    set movies(movies){
        this._movie = movies
        this.render()
    }

    render(){
        const containerMovie = document.getElementById('movieList');
        containerMovie.innerHTML = ''; // Clear previous results
        
        this._movie.forEach(movie => {
            const movieElement = document.createElement('movie-item')
            const containerMovie = document.getElementById('movieList')
            movieElement.movie = movie
            this.appendChild(movieElement)
            containerMovie.append(movieElement)
        });


    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('movie-list', movielist)