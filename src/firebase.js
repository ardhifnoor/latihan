import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyClGbLHSonlmjTUGMKAarerodFBkCkKsqg",
    authDomain: "porto-ardhi.firebaseapp.com",
    databaseURL: "porto-ardhi.firebaseio.com",
    storageBucket: "porto-ardhi.appspot.com",
};

export default Firebase.initializeApp(config);
export const ref = Firebase.database().ref();
export const auth = Firebase.auth;
export const provider = new Firebase.auth.GoogleAuthProvider();