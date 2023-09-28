
const firebaseConfig = {
  apiKey: "AIzaSyDXod-CW2AtZrDB5gqFFUhncIX_nRRzCV4",
  authDomain: "ayushlogintrainingproject.firebaseapp.com",
  databaseURL:"https://ayushlogintrainingproject-default-rtdb.firebaseio.com/",
  projectId: "ayushlogintrainingproject",
  storageBucket: "ayushlogintrainingproject.appspot.com",
  messagingSenderId: "29151540132",
  appId: "1:29151540132:web:dcc639565cce35f013c731",
  measurementId: "G-XJX0B429WK"
};

firebase.initializeApp(firebaseConfig);
var authentication_obj=firebase.auth();