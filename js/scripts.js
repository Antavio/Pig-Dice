//Business Logic
function Player(name,generatedNumber,rollSum,total){
  this.name=name;
  this.generatedNumber=generatedNumber;
  this.rollSum = rollSum;
  this.total = total;
};

var playerOne = new Player(name1,generatedNumber1,rollSum1,total1);
var playerTwo = new Player(name2,generatedNumber2,rollSum2,total2);

function disablePlayerOne(){
  document.getElementById("roll-two").disabled=false;
  document.getElementById("roll-one").disabled=true;
}

function disablePlayerTwo(){
  document.getElementById("roll-two").disabled=true;
  document.getElementById("roll-one").disabled=false;
}


var name1 = "";
var name2 = "";
var generatedNumber1 = 0;
var generatedNumber2 = 0;
var rollSum1 = 0;
var rollSum2 = 0;
var total1=0;
var total2=0;
var heldTotal1=0;

//Player One Logic
function playerOneLogic(){
  $("#roll-one").click(function(){
    generatedNumber1 = Math.floor(Math.random()*6 + 1);
    $("#die-side").text(generatedNumber1);
    // alert(stored_random);
    if(generatedNumber1!=1){
      rollSum1+=generatedNumber1;
      $("#current-score1").text(rollSum1);
      //$("#total-score1").text(total1);
      if(total1>=100){
        alert("You won the game");
      }else {

      }
    } else {
      rollSum1=0;
      $("#current-score1").text(rollSum1);
      alert("Your die rolled on side 1 "+ "\n Next player to roll the die");
      // $("#total-score1").text(total1);
      disablePlayerOne();
    };
  });
  $("#hold-player-one").click(function(){
    total1+=rollSum1;
    rollSum1-=rollSum1;
    alert("Your Current Total Score is: "+ total1 + " \n Player Two turn to play");
    $("#total-score1").text(total1);
    if(total1>=100){
      alert("You won the game");
    }else {

    }
    disablePlayerOne();
  });
};

//Player two Logic
function playerTwoLogic(){
  $("#roll-two").click(function(){
    generatedNumber2 = Math.floor(Math.random()*6 + 1);
    $("#die-two").text(generatedNumber2);
    // alert(stored_random);
    if(generatedNumber1!=1){
      rollSum2+=generatedNumber2;
      $("#current-score2").text(rollSum2);
      //$("#total-score1").text(total1);
      if(total2>=100){
        alert("You won the game");
      }else {

      }
    } else {
      rollSum2=0;
      $("#current-score2").text(rollSum2);
      alert("Your die rolled on side 1 "+ "\n Next player to roll the die");
      // $("#total-score1").text(total1);
      disablePlayerTwo();
    };
  });
  $("#hold-player-two").click(function(){
    total2+=rollSum2;
    rollSum2-=rollSum2;
    alert("Your Current Total Score is: "+ total2 + " \n Player Two turn to play");
    $("#total-score2").text(total2);
    if(total2>=100){
      alert("You won the game");
    }else {

    }
    disablePlayerTwo();
  });
};
function clearNameFields(){
  document.getElementById("form_input").reset();
};

function restart_game(){
  $("#restart").click(function(){
    $("#login_details").show();
    $("#game-interface").hide();
    $("#die-side").empty();
    $("#current-score1").empty();
    $("#total-score1").empty();
    $("#die-two").empty();
    $("#current-score2").empty();
    $("#total-score2").empty();
    document.getElementById("roll-two").disabled=false;
    document.getElementById("roll-one").disabled=false;
    rollSum1=0;
    rollSum2=0;
    total1=0;
    total2=0;
    clearNameFields();


  });
};
//User Interface Logic
$(document).ready(function(){
  $("#form_input").submit(function (event){
    event.preventDefault();
    $("#game-interface").slideDown("slow");
    $("#login_details").hide();
    name1= $("#first-player").val();
    $(".player-one-name").text(name1);
    name2= $("#second-player").val();
    $(".player-two-name").text(name2);
  });


  playerOneLogic();
  playerTwoLogic();
  clearNameFields();
  restart_game();
});
