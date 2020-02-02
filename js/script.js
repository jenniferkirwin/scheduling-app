$(document).ready(function () {

  // make text areas automatically resize
  $('textarea').autoResize();

  // Update date on web page

  let currentTime = moment().format('MMMM Do, YYYY');

  $('.currentTime').text(currentTime);

  // -------------------------------------------------------------------------------------
  // Creating array for toDo items, and adding items of they are in storage
  // -------------------------------------------------------------------------------------

  let toDos = [];
  let toDosLen = 9;
  let savedToDos = JSON.parse(localStorage.getItem("savedToDos"));

  function toDoArray() {
    for (i = 0; i < toDosLen; i++) {
      toDos.push("");
    };
  }

  if (savedToDos !== null) {
    toDos = savedToDos;
    for (i = 0; i < toDosLen; i++) {
      $(`[data-index="${i}"]`).text(toDos[i]);
    };    
  }

  else {
    toDoArray();
  }

  // -------------------------------------------------------------------------------------
  // Saving a toDo item on "save" button click
  // -------------------------------------------------------------------------------------

  $(".saveIcon").on("click", function() {
    let $this = $(this);
    let dataIndex = $this.closest('form').find('.toDofield').attr('data-index');
    let dataToDo = $this.closest('form').find('.toDofield').val();

    toDos[dataIndex] = dataToDo;

    localStorage.setItem("savedToDos", JSON.stringify(toDos));
    
  });

  // -------------------------------------------------------------------------------------
  // Create object to store score in local storage
  // -------------------------------------------------------------------------------------

  $(".btn-clear").on("click", function () {
    localStorage.clear();
    $('textarea').empty();
    toDoArray();
  });

});