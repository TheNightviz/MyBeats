#!/bin/sh

cd ./my-beats/src/components/Spotify
export SPOTIFY_CLIENT_ID=f8b0b0aa401a4597af0caa66ac4bb9e5
export SPOTFIY_CLIENT_SECRET=0e447f9e9629472ea35eb73a13f45a1f
echo $SPOTIFY_CLIENT_ID
echo $SPOTFIY_CLIENT_SECRET
node server.js


