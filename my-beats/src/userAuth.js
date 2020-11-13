/* This is the file that will be used to:
  -  Create a server on local machine (to pull spotify data)
  -  Handle user login request
  -  Specify scope for authorization
  -  Performing the exchange of authorization code for an access token
  -  Calling the Web API endpoint


*/

 
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" librarry
var user_id = "ibssasimon";
var token = "Bearer BQC2xiYZfhbRIE59gFDzdKvMzLlZNSVs_uihwjzW83ZnDI4U-N4isAO_R007_hIxBAqFb9sQKkunZtqcEIftsjpLf3VohFhjBywKZKAqMqTp17QJGUTfefBfm6VeLV1DI9iWdzGE_U6lNK8YBQ";
