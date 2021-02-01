/*
export const pullGenreData = function() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
        // API endpoint

        fetch("https://api.spotify.com/v1/recommendations", {
            headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json()).then((data) => {
            console.log(data);
            return data;
});
}
*/
//function to pull genre data from seed reccomendations
export const pullGenreData = function() {
    let accessToken = localStorage.getItem('spotifyToken') || '';
        // API endpoint
        fetch("https://api.spotify.com/v1/recommendations", {
            headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json()).then((data) => {
            console.log(data);
            return data;
});
}
