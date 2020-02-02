$(document).ready(function () {

  // make text areas automatically resize
  $('textarea').autoResize();

  // -------------------------------------------------------------------------------------
  // Creating array for toDo items, and adding items of they are in storage
  // -------------------------------------------------------------------------------------

  let toDos = [];
  let toDosLen = 9;
  let savedToDos = JSON.parse(localStorage.getItem("savedToDos"));

  function toDoArray() {
    toDos = [];
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

    M.toast({html: '<i class="material-icons left">check</i> Saved'});
    
  });

  // -------------------------------------------------------------------------------------
  // Create object to store score in local storage
  // -------------------------------------------------------------------------------------

  $(".btn-clear").on("click", function () {
    localStorage.clear();
    $('textarea').val("");
    M.toast({html: '<i class="material-icons left">delete_forever</i> Deleted'})
    toDoArray();
  });

// -------------------------------------------------------------------------------------
// find the current time when the page is loaded, and see if there are tasks from a different day
// -------------------------------------------------------------------------------------

// let savedToDos = JSON.parse(localStorage.getItem("savedToDos"));
let currentTime = moment();

$('.currentTime').text(currentTime.format('MMMM Do, YYYY'));

// -------------------------------------------------------------------------------------
// Turn each time block gray if the hour has passed. I chose to still let the user edit the item if they desired
// -------------------------------------------------------------------------------------

let toDoForms = $('form');
let toDoTimes = [];

for (i = 0; i < toDosLen; i++) {
    toDoTimes.push(toDoForms[i].attributes[`data-time`].value);
};

function timedUpdate () {
  for (i = 0; i < toDosLen; i++) {
    if (moment(`${toDoTimes[i]}`, `LTS`) < moment()) {
      $(`[data-time="${toDoTimes[i]}"]`).addClass('timePassed');
    }
  };

  setTimeout(timedUpdate, 1000);
}

timedUpdate();

});