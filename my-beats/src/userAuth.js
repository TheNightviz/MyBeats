/* This is the file that will be used to:
  -  Create a server on local machine (to pull spotify data)
  -  Handle user login request
  -  Specify scope for authorization
  -  Performing the exchange of authorization code for an access token
  -  Calling the Web API endpoint


*/

 
var request = require("request"); // "Request" librarry
var user_id = "ibssasimon";
var token = "Bearer BQAYMEDeOBYRbZgifhl4sbmEQamoWKp4yHDkf-h14-mZs4I_MilDyq31vGk1jBbzdt4C-DlclfnZM4Hfkmd2tjCbOcAivxlgr5-yGcN11o-QattTV6Kt3pSB2fK09TxDNiT1VkqpCNxjAlAZlA";


var playlists_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists";

request({url:playlists_url, headers:{"Authorization":token}}, function(err, res){
	if (res){
		var playlists=JSON.parse(res.body);	
		var playlist_url = playlists.items[0].href;
		request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
			if (res){
				var playlist = JSON.parse(res.body);
				console.log("playlist: " + playlist.name);
				playlist.tracks.items.forEach(function(track){
					console.log(track.track.name);
				});
			}
		})		
	}
})

