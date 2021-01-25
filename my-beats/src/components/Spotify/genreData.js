export var pullGenreData = function(){
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    fetch('https://api.spotify.com/v1/me/top/tracks',{
        headers: {'Authorization' : 'Bearer ' + accessToken}
    }).then(response=> response.json()) 
    .then(data=> console.log(data));
}
