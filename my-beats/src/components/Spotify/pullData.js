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
// Grabs URL after 'OverView' and parses access token. Will return empty string if user not logged in - shouldnt need
export const getAccessToken = function() {
    var queryString = window.location.search;
    console.log(queryString);
    var accessToken = queryString.slice(14, queryString.length);
    console.log(accessToken);
    localStorage.setItem('spotifyToken', accessToken);
    return accessToken;
}

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
