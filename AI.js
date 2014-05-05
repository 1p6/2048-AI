var dir = 0;
var highScore = 0;

var b = document.creatElement('button');
b.innerHTML = "Get High Score";
b.onClick = "alert(highScore);";
document.body.appendChild(b);

function gameOver(){
  return document.getElementsByClassName("game-over").length > 0;
}

function triggerKey(key){
  var e = document.createEvent("Event");
  e.initEvent("keydown", true, true);
  
  e.which = key;
  
  document.body.dispatchEvent(e);
}

function move(){
  triggerKey(dir + 37);
  
  dir = (dir + 1) % 4;
}

function getScore(){
  return parseInt(document.getElementsByClassName("score-container")[0].innerHTML.split('<')[0]);
}

(function tick(){
  if(gameOver()){
    var score = getScore();
    highScore = score > highScore ? score : highScore;
    triggerKey(82);
  }
  else{
    move();
  }
  
  setTimeout(tick, 50);
})();
