import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDOecFCtZYnbSvZFkzD0R6ESFCw7ks2YRE',
  authDomain: 'cropchat-c3019.firebaseapp.com',
  databaseURL: 'https://cropchat-c3019.firebaseio.com',
  projectId: 'cropchat-c3019',
  storageBucket: 'cropchat-c3019.appspot.com',
  messagingSenderId: '15507557319',
};
firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
