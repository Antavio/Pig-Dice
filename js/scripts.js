function disablePlayerOne(){
  document.getElementById("roll-two").disabled=false;
  document.getElementById("roll-one").disabled=true;
}

function disablePlayerTwo(){
  document.getElementById("roll-two").disabled=false;
  document.getElementById("roll-one").disabled=true;

}

$(document).ready(function(){
  var randomScore1 = 0;
  var randomScore2 = 0;
  var rollScore1 = "";
  var rollScore2 = "";
  var sum1=0;
  var sum2=0;


  function Player(name,randomScore,rollScore,sum){
    this.name=name;
    this.randomScore=randomScore;
    this.rollScore = rollScore;
    this.sum = sum;
  };



  var playerOne = new Player(name,randomScore1,rollScore1,sum1);
  var playerTwo = new Player(name,randomScore2,rollScore2,sum2);

  $("#roll-one").click(function(){
    randomScore1 = Math.floor(Math.random()*6 + 1);
     $("#die-side").text(randomScore1);
    // alert(stored_random);
    if(randomScore1!=1){
      sum1+=randomScore1;
      $("#current-score1").text(sum1);
    } else {
      sum1=0;
        $("#current-score1").text(sum1);
        disablePlayerOne();
    }
  });
  $("#hold-player-one").click(function(){
    alert("Your Score is: "+ sum1 + " \n Player Two turn to play");
    disablePlayerOne();
  });
});
