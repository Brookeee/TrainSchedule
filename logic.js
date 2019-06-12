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

      var tName = $("#train-name").val().trim();
      var destination = $("#godestination").val().trim();
      var tTime = $("#time-train").val().trim();
      var freq = $("#freq").val().trim();
    
      // new train data holder 
      database.ref().push({
        trainName: tName,
        tDest: destination,
        trainTime: tTime,
        tFreq: freq,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });
      // clear entry
      $("#train-name").val("");
      $("#godestination").val("");
      $("#time-train").val("");
      $("#freqlevel").val("");

      // Event to add new train info to database
      database.ref().on("child_added", function(snapshot){
      // variables for firebase 
      var newName = snapshot.val().trainName;
      var newDest = snapshot.val().tDest;
      var newTime = snapshot.val().trainTime;
      var newFreq = snapshot.val().tFreq;

      console.log(newName);
      console.log(newDest);
      console.log(newTime);
      console.log(newFreq);

      var firstTimeCon = moment(newName, "hh:mm").subtract(1, "years");
      console.log(firstTimeCon);

      var currentTime = moment();
      console.log("current time: " + moment(currentTime).format("HH:mm"));
      
      var timeDiff = moment().diff(moment(firstTimeCon, "minutes"));
      console.log("difference in time: " + timeDiff); 

      var timeRemain = timeDiff % newFreq;
      console.log(timeRemain); //NaN error, fix 

      var minsTill = newFreq - timeRemain;
      console.log("minutes till train: " + minsTill);

      var nextTrain = moment().add(minsTill, "minutes").format("hh:mm");
      console.log("arrival time: " + moment(nextTrain).format("hh:mm")); // Error, fix 

        $("#table-display > tbody").append("<tr><td>" + newName + "</td><td>" + newDest + "</td><td>" + newFreq + "</td><td>" + nextTrain + "</td><td>" + minsTill + "</td></tr>");

  });


