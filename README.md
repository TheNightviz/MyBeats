# MyBeats
Group repository for MyBeats 308/309 Project

# How to run MyBeats:
1. Go into terminal and clone the MyBeats repository (using ` git clone `).
2. Make sure you have Node.js (version 12.19.0 or newer) installed on your system. Use [this download](https://nodejs.org/en/download/) to get started.
3. Run ` chmod 700 installDependencies.sh `
4. Run ` ./installDependencies.sh `
5. Navigate to my-beats/src/components/Spotify by running ` cd my-beats/src/components/Spotify `
6. Start the Spotify server by exporting SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET. Contact MyBeats developers for the access tokens.
    For example: ` export SPOTIFY_CLIENT_ID = idHere `  
                 ` export SPOTIFY_CLIENT_SECRET = secretHere `
7. Run ` node server.js `
8. In a new terminal window or tab, navigate to ~/MyBeats/my-beats
9. Run ` npm start ` in the new terminal and MyBeats will load in a local environment on your browser.


# System Architecture:
![alt text](https://github.com/TheNightviz/MyBeats/blob/master/System%20Architecture.png "System Architecture")

# Javascript Style Guide:
We will be adhering to [this styleguide](https://google.github.io/styleguide/jsguide.html) for javascript.

# Static Analysis Report:
Our static Analysis report can be found [here](https://github.com/TheNightviz/MyBeats/blob/master/STATIC_ANALYSIS.md)

