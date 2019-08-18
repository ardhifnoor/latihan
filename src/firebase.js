import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyClGbLHSonlmjTUGMKAarerodFBkCkKsqg",
    authDomain: "https://porto-ardhi.firebaseapp.com/",
    databaseURL: "https://porto-ardhi.firebaseio.com",
    storageBucket: "porto-ardhi.appspot.com",
};

export default Firebase.initializeApp(config);