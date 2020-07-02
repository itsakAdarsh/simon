var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red", "blue", "green", "yellow"]
var level=1;
$(document).keypress(function (a){
  nextSequence();
  $("#level-title").text("Level :"+level);
})

function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  console.log(randomNumber);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  flash(randomChosenColour);
  audio(randomChosenColour);
}

$(".btn").click(function (){
  var userChosenColour=this.id;
  audio(userChosenColour);
  console.log(this.id);
  userClickedPattern.push(userChosenColour);
  anime(this.id);
  checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currLev){
  if (userClickedPattern[currLev]==gamePattern[currLev]){
    console.log("Sucess");
  }
  if(userClickedPattern.length==gamePattern.length){
    userClickedPattern=[]
    setTimeout(function(){
      nextSequence();
    },1000)
  }
  else{
    $("#level-title").text("GAME OVER!");
    gamePattern=[]
    userClickedPattern=[]
    level=0

  }

}


function anime(a){
  $("#"+a).addClass("pressed");
  setTimeout(function(){$("#"+a).removeClass("pressed");},100);
}
function flash(a){
  $("."+a).fadeOut(200).fadeIn(200);
}
function audio(a){
  switch(a){
    case "red":
    var audio = new Audio('sounds/red.mp3');
    audio.play();
    break;
    case "blue":
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
    break;
    case "green":
    var audio = new Audio('sounds/green.mp3');
    audio.play();
    break;
    case "yellow":
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
    break;
    default:
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
    break;
  }
}
