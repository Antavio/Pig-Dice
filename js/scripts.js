$(document).ready(function(){
  var randomScore1 = "";
  var randomScore2 = "";
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

  // // function random_generator(){
  // //   var stored_random = Math.floor(Math.random()*6 + 1);
  // //   return stored_random;
  // }

  var playerOne = new Player(name,randomScore1,rollScore1,sum1);
  var playerTwo = new Player(name,randomScore2,rollScore2,sum2);

  $("#roll-one").click(function(){
    var stored_random = Math.floor(Math.random()*6 + 1);
     $("#die-side").text(stored_random);
    // alert(stored_random);
    if(stored_random!=1){
      sum1+=stored_random;
      $("#current-score1").text(sum1);
    } else {
      sum1+=0;
        $("#current-score1").text(sum1);
    }
  });
});
