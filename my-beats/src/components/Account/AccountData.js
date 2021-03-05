import React from 'react';
import '../../css/index.css';



const userProfileData = fetch('https://api.spotify.com/v1/me/', {
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
}).then(response => response.json()).then((data) => {
    console.log("user profile data:")
    console.log(data);
    return data;
})

class AccountData extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       display_name: "",
       email: "",
       country: "",
       premium: ""
     };
   }

   //updates username to spotify display name
   getSpotifyUsername = async () => {
       const data = await userProfileData;
       this.setState({ 
          display_name: data.display_name,
          email: data.email,
          country: data.country,
          premium: data.premium
           
      
      });
   };

   //calls getSpotifyUsername when component is rendered
   componentDidMount() {
     this.getSpotifyUsername();
   }

   render() {
      return(
         <div id="AccountImage">
            <img src = '../../../public/Photos/spotifyicon.png' alt='user-profile-picture' style={{padding:'400px', width:'500px', height:'500px', borderRadius: '400px'}}></img>
            <h1>Hello "user"</h1>
         </div>
      )
   }
}
export default AccountData;
