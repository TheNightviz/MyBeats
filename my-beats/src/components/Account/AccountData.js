import React from 'react';
import '../../css/account.css';



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
       premium: "Free",
       prof_pic: "/Photos/spotifyicon.png"
     };
   }

   //updates username to spotify display name
   getSpotifyUserAccountData = async () => {
       const data = await userProfileData;
       this.setState({ 
          display_name: data.display_name,
          email: data.email,
          country: data.country
       });
       if (data.product === "premium") {
          this.setState({premium: "Premium"});
       }
       if (data.images.length != 0) {
          this.setState({prof_pic: data.images[0].url})
       }
   };

   //calls getSpotifyUsername when component is rendered
   componentDidMount() {
     this.getSpotifyUserAccountData();
   }

   render() {
      return(
         <div id="contentContainer">
            <img src={this.state.prof_pic} alt='user-profile-picture' class="userProfilePicture"></img>
            <h1 class="display_name">{this.state.display_name}</h1>
            <h2 class="profileData">Email: {this.state.email}</h2>
            <h2 class="profileData">Location: {this.state.country}</h2>
            <h2 class="profileData">Plan: {this.state.premium}</h2>
            <a href="https://www.spotify.com/us/account/profile/" class="profileData" id="editAccount">edit profile</a>
         </div>
      )
   }
}
export default AccountData;
