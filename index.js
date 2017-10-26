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
