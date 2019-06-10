$(document).ready(function(){
    // Firebase 
    var firebaseConfig = {
        apiKey: "AIzaSyCpdi7JmX5YD141KC_3TMmuTjPf5RA-3UM",
        authDomain: "train-schedule-a2a38.firebaseapp.com",
        databaseURL: "https://train-schedule-a2a38.firebaseio.com",
        projectId: "train-schedule-a2a38",
        storageBucket: "train-schedule-a2a38.appspot.com",
        messagingSenderId: "1097048933013",
        appId: "1:1097048933013:web:9dafd4bcaf3e29cd"
      };

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
})

// Firebase connection

// Capture user input values + (trim)
// Variables for new train info(name,dest, time, freq)