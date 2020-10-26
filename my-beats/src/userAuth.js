/* This is the file that will be used to:
  -  Create a server on local machine (to pull spotify data)
  -  Handle user login request
  -  Specify scope for authorization
  -  Performing the exchange of authorization code for an access token
  -  Calling the Web API endpoint


*/

let client_id = 'f8b0b0aa401a4597af0caa66ac4bb9e5';
let client_secret = '0e447f9e9629472ea35eb73a13f45a1f';
let redirect_uri = 'http://localhost:8888/callback';


/*export function getLogin() {
  userAuth.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });
}*/
