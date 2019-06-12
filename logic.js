$(document).ready(function() {

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

      var database = firebase.database();

      // Add new train info 

      $("#submit").on("click", function(event){
        event.preventDefault();
      })

      var tName = $("#train-name").val().trim();
      var destination = $("#godestination").val().trim();
      var tTime = $("#time-train").val().trim();
      var freq = $("#freqlevel").val().trim();

      // new train data holder 
      var newData = {
        trainName: tName,
        tDest: destination,
        trainTime: tTime,
        tFreq: freq,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      };

      database.push(newData);

      // Console log
      console.log(newData.trainName);
      console.log(newData.tDest);
      console.log(newData.trainTime);
      console.log(newData.tFreq);

      // clear entry
      $("#train-name").val("");
      $("#godestination").val("");
      $("#time-train").val("");
      $("#freqlevel").val("");
      // Event to add new train info to database
      database.ref().on("child_create", function(childSnapshot){
      console.log(childSnapshot.val());
      
      // variables for firebase 
      var newName = childSnapshot.val().trainName;
      var newDest = childSnapshot.val().tDest;
      var newTime = childSnapshot.val().trainTime;
      var newFreq = childSnapshot.val().tFreq;
      
      var timeDiff = moment().diff(moment.unix(newTime),"minutes");
      var timeLeft = moment().diff(moment.unix(newTime),"minutes") % newFreq;
      var firebaseMins = newFreq - timeLeft;
      
      var newArrival = moment().add(minutes, "m").format("hh:mm A");
      
      console.log(minutes);
      console.log(newArrival);
      console.log(moment().format("hh:mm A"));
      console.log(moment().format("X"));
  
  
  })


});
