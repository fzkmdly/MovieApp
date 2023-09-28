// import { async } from 'regenerator-runtime';
import './components/footerBar.js';
import './data/dataSource.js';
import DataSource from './data/dataSource.js';
import './components/movieList.js'


const main = () => {
    const searchResults = document.querySelector('search-bar')
    const listMovie = document.querySelector('movie-list');

    const buttonClicked = async () => {
        try {
            const results = await DataSource.searchMovie(searchResults.value)
            console.log(results)
            renderResult(results)
            // resultsMessage(results)
        } catch (error) {
            errorMessage(error)
        }

    }

    // const resultsMessage = results => {
    //     movieResult.innerHTML = `<h3>Menampilkan pencarian dari '${results.value}'</h3>`
    // }

    const renderResult = async result => {
        listMovie.movies = result
    }

    const errorMessage = message => {
        listMovie.renderError(message)
    }

    
    searchResults.clickEvent = buttonClicked;
}

export default main;