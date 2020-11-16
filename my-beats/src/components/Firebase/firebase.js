import app from 'firebase/app';
import 'firebase/auth';
//code for connection to MyBeats firebase 

const firebaseConfig = {
    apiKey: "AIzaSyAVCkrVOzEqm0-SMZoB4zGQ3scmdPS5RZo",
    authDomain: "mybeats-3bc04.firebaseapp.com",
    databaseURL: "https://mybeats-3bc04.firebaseio.com",
    projectId: "mybeats-3bc04",
    storageBucket: "mybeats-3bc04.appspot.com",
    messagingSenderId: "547924526797",
    appId: "1:547924526797:web:ee20a054737096d45c0b84",
    measurementId: "G-PCQC9LXLQ9"
  };

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }
  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

  export default Firebase;