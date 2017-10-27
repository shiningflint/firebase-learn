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
  var name = document.getElementById('name');
  var save = document.getElementById('save');
  var results = document.getElementById('results');
  var value = 0;
  var firebase = firebaseInit();

  button.onclick = addScore;
  save.onclick = saveScore;
  showScores();

  function addScore() {
    value += 1;
    return score.innerHTML = value;
  }

  function saveScore() {
    var data = {
      name: name.value,
      score: value,
    };
    firebase.push(data);
  }

  function showScores() {
    firebase.on('value', gotData, errData);
  }

  function gotData(data) {
    var scores = data.val();
    var keys = Object.keys(scores);
    results.innerHTML = "";
    keys.map(function(val, index) {
      var listnode = document.createElement("li");
      var listnamescore = document.createElement("p");
      listnamescore.innerHTML = scores[val].name + ': ' + scores[val].score;
      listnode.appendChild(listnamescore);
      results.appendChild(listnode);
    });

    function createItem(value) {
      var p = document.createElement("p");
      p.innerHTML = value;
      return p;
    }
  }

  function errData(err) {
    console.log('Error!');
    console.log(err);
  }
}
