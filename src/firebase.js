import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDTWs0hfz6PDtWaiLW_e4JfL-BGqyp_gpQ",
    authDomain: "tinder-93e9b.firebaseapp.com",
    databaseURL: "https://tinder-93e9b.firebaseio.com",
    projectId: "tinder-93e9b",
    storageBucket: "tinder-93e9b.appspot.com",
    messagingSenderId: "288868180973",
    appId: "1:288868180973:web:9d2f3c5423d3d8c2263de4",
    measurementId: "G-E4K453JCW8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();

  export default database;