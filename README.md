# MyBeats
Group repository for MyBeats 308/309 Project

# How to run MyBeats:
1. Go into terminal and clone the MyBeats repository (using ''' git clone ''').
2. Run ''' chmod 700 installDependecies.sh '''
3. Run ''' ./installDependecies.sh '''
4. Navigate to my-beats/src/components/Spotify by running ''' cd my-beats/src/components/Spotify '''
5. Start the Spotify server by exporting SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET. Contact MyBeats developers for the access tokens.
    For example: ''' export SPOTIFY_CLIENT_ID = idHere
                     export SPOTIFY_CLIENT_SECRET = secretHere '''
6. Run ''' node server.js '''
7. In a new terminal window or tab, navigate to ~/MyBeats/my-beats
8. Run ''' npm start ''' in the new terminal and MyBeats will load in a local environment on your browser.


# System Architecture:
![alt text](https://github.com/TheNightviz/MyBeats/blob/master/System%20Architecture.png "System Architecture")

# Javascript Style Guide:
We will be adhering to [this styleguide](https://google.github.io/styleguide/jsguide.html) for javascript.

# Static Analysis Report:
Our static Analysis report can be found [here](https://github.com/TheNightviz/MyBeats/blob/master/STATIC_ANALYSIS.md)