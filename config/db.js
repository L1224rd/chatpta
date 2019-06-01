const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyCZOhtz-gpQtLrd6nIc0uIcQALOqVgR22s",
  authDomain: "chatpta-87da4.firebaseapp.com",
  databaseURL: "https://chatpta-87da4.firebaseio.com",
  projectId: "chatpta-87da4",
  storageBucket: "",
  messagingSenderId: "671956757140",
  appId: "1:671956757140:web:fde366867229cd44"
});

module.exports = firebase.database();