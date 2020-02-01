$(document).ready(function () {

  // -------------------------------------------------------------------------------------
  // seeing if to-dos are in storage & rendering them
  // -------------------------------------------------------------------------------------

  // if (localStorage.getItem("userScores") !== null) {
  //   userScores = JSON.parse(localStorage.getItem("userScores"));
  //   userScoresInd = userScores.length;
  //   scoreList();
  // }

  // else {
  //   userScores = [];
  // };

  // function scoreList() {
  //   for (let i = 0; i < userScores.length; i++) {
  //     let tr = scoresTable.append($("<tr>"));
  //     tr.append($("<td>").text(userScores[i].name));
  //     tr.append($("<td>").text(userScores[i].score));
  //   };
  // };


  // -------------------------------------------------------------------------------------
  // detecting a "save" and adding it to local storage
  // -------------------------------------------------------------------------------------

  // $(document).on("click", ".btn-start", function () {
  //   $(".btn-large").addClass("disabled");
  //   arrayIndex = 0;
  //   timer();
  //   renderQuestion();
  // });

  // -------------------------------------------------------------------------------------
  // Create object to store score in local storage
  // -------------------------------------------------------------------------------------

  // $("#submit").on("click", function (e) {

  //   let userName = $("#name").val();

  //   if (userName === "") {
  //     $(".modal").addClass("shake");
  //     setTimeout(function () {
  //       $(".modal").removeClass("shake");
  //     }, 800);
  //     return;

  //   }
  //   // push to storage

  //   newScore = {
  //     "name": userName,
  //     "score": finalScore
  //   }
  //   userScores.push(newScore);
  //   localStorage.setItem("userScores", JSON.stringify(userScores));
  //   $("#name").val("");

  //   // render on table
  //   let tr = scoresTable.append($("<tr>"));
  //   tr.append($("<td>").text(userScores[userScores.length - 1].name));
  //   tr.append($("<td>").text(userScores[userScores.length - 1].score));
  //   instance.close();
  // });

  // $(".btn-clear").on("click", function () {
  //   localStorage.clear();
  //   userScores = [];
  //   scoresTable.empty();
  // });

});