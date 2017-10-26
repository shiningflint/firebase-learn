function firebaseInit() {
  // Initialize Firebase
  // Get this code from the google firebase console
  var config = {
    apiKey: "AIzaSyCUtF_WXn5avNg1IDSTOMofbn29QBwMU_Y",
    authDomain: "web-test-project-3049e.firebaseapp.com",
    databaseURL: "https://web-test-project-3049e.firebaseio.com",
    projectId: "web-test-project-3049e",
    storageBucket: "web-test-project-3049e.appspot.com",
    messagingSenderId: "620721885462"
  };
  firebase.initializeApp(config);
  // Log firebase to see there are no errors
  console.log(firebase);

  // create a firebase database object
  var database = firebase.database();
  console.log(database);
}

function gameInit() {
  var button = document.getElementById('button');
  var score = document.getElementById('score');
  var value = 0;

  button.onclick = addScore;

  function addScore(e) {
    value += 1;
    return score.innerHTML = value;
  }
}
