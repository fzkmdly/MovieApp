class DataSource {
    static searchMovie(keyword) {
        const key = '774b0985'; 
        const API = `http://www.omdbapi.com/?apikey=${key}`;

        return fetch(`${API}&s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.Search) {
                    return Promise.resolve(responseJson.Search);
                } else {
                    return Promise.reject({ error: `${keyword} is not found` });
                }
            });
    }
}


export default DataSource;