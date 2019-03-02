function disablePlayerOne(){
  document.getElementById("roll-two").disabled=false;
  document.getElementById("roll-one").disabled=true;
}

function disablePlayerTwo(){
  document.getElementById("roll-two").disabled=false;
  document.getElementById("roll-one").disabled=true;
}

var name1 = "";
var name2 = "";
var generatedNumber1 = 0;
var generatedNumber2 = 0;
var rollSum1 = 0;
var rollSum2 = 0;
var total1=0;
var total2=0;
$(document).ready(function(){


  function Player(name,generatedNumber,rollSum,total){
    this.name=name;
    this.generatedNumber=generatedNumber;
    this.rollSum = rollSum;
    this.total = total;
  };



  var playerOne = new Player(name1,generatedNumber1,rollSum1,total1);
  var playerTwo = new Player(name2,generatedNumber2,rollSum2,total2);

  //Player One Logic
  $("#roll-one").click(function(){
    generatedNumber1 = Math.floor(Math.random()*6 + 1);
    $("#die-side").text(generatedNumber1);
    // alert(stored_random);
    if(generatedNumber1!=1){
      total1+=generatedNumber1;
      $("#current-score1").text(total1);
    } else {
      sum1=0;
      alert("Your die rolled on side 1 "+ "\n Next player to roll the die");
      $("#current-score1").text(total1);
      disablePlayerOne();
    }
  });
  $("#hold-player-one").click(function(){
    alert("Your Score is: "+ total1 + " \n Player Two turn to play");
    disablePlayerOne();
  });
});
