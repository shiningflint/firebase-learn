"use strict";

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
  // Log firebase to see there are no errors console.log(firebase)
  firebase.initializeApp(config);

  // create a firebase database object
  var database = firebase.database();
  var ref = database.ref('scores');
  return ref;
}

function gameInit() {
  var button = document.getElementById('button');
  var score = document.getElementById('score');
  var save = document.getElementById('save');
  var value = 0;
  var firebase = firebaseInit();

  button.onclick = addScore;
  save.onclick = saveScore;

  function addScore(e) {
    value += 1;
    return score.innerHTML = value;
  }

  function saveScore(e) {
    var data = {
      name: "Adum",
      score: value,
    };
    firebase.push(data);
  }
}
