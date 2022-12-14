import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB22NJiaPUVWxtpOzd0eoX_ASkhIHLr1VQ",
    authDomain: "fireblogsyt-fbfee.firebaseapp.com",
    databaseURL: "https://fireblogsyt-fbfee-default-rtdb.firebaseio.com",
    projectId: "fireblogsyt-fbfee",
    storageBucket: "fireblogsyt-fbfee.appspot.com",
    messagingSenderId: "829704647179",
    appId: "1:829704647179:web:d8ee8bbc279eb5e701cd0e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();