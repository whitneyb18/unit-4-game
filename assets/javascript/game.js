//Define variables
var redRupeeValue = 0;
var greenRupeeValue = 0;
var blueRupeeValue = 0;
var yellowRupeeValue = 0;

var yourScore = 0;
var wins = 0;
var losses = 0;
var goalNumber = 0;

$(function() {
  start(0, 0);

  //Generate and assign a random number to crystals
  function getRandomInt(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Generate Random number for the goal number
  function getCrystalNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function start(w, l) {
    wins = w;
    losses = l;
    yourScore = 0;
    goalNumber = getRandomInt();
    redRupeeValue = getCrystalNumber();
    greenRupeeValue = getCrystalNumber();
    blueRupeeValue = getCrystalNumber();
    yellowRupeeValue = getCrystalNumber();
    //add wins and losses to html
    $("#wins").html(wins);

    $("#losses").html(losses);

    $("#goalNumber").html(goalNumber);

    $("#yourScore").html(yourScore);
  }

  function rupeeClick(score, rupeeValue) {
    score += rupeeValue;
    $("#yourScore").html(score);
    if (score === goalNumber) {
      alert("WIN");
      wins++;
      $("#wins").html(wins);
      start(wins, losses);
    } else if (score > goalNumber) {
      alert("YOU LOSE");
      losses++;
      $("#losses").html(losses);
      start(wins, losses);
    } else {
      yourScore = score;
    }
  }

  //When rupees are clicked
  $("#greenRupee").on("click", function() {
    rupeeClick(yourScore, greenRupeeValue);
  });

  $("#blueRupee").on("click", function() {
    rupeeClick(yourScore, blueRupeeValue);
  });

  $("#redRupee").on("click", function() {
    rupeeClick(yourScore, redRupeeValue);
  });

  $("#yellowRupee").on("click", function() {
    rupeeClick(yourScore, yellowRupeeValue);
  });
});
