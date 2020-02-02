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
// find the current time when the page is loaded, and see if there are tasks from a different day
// -------------------------------------------------------------------------------------

let previousDate = JSON.parse(localStorage.getItem("previousDate"));
let currentDate = moment().format('YYYY-MM-DD');
let $dateWarning = $('.dateWarning');

$('.currentTime').text(moment(currentDate).format('MMMM Do, YYYY'));

if ((previousDate !== null) && (moment(`${previousDate}`).isBefore(`${currentDate}`))) {
  $dateWarning.removeClass('hide');
  $('.previousDate').text(moment(previousDate).format('MMMM Do, YYYY'));
}

else {
  localStorage.setItem("previousDate", JSON.stringify(currentDate));
}



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

  // -------------------------------------------------------------------------------------
  // Delete, Keep, and Save Buttons
  // -------------------------------------------------------------------------------------

  $(".btn-clear").on("click", function () {
    localStorage.clear();
    $('textarea').val("");
    M.toast({html: '<i class="material-icons left">delete_forever</i> Deleted'});
    localStorage.setItem("previousDate", JSON.stringify(currentDate));
    $dateWarning.addClass('hide');
    toDoArray();
  });

  $(".btn-keep").on("click", function () {
    $dateWarning.addClass('hide');
    localStorage.setItem("previousDate", JSON.stringify(currentDate));
    M.toast({html: '<i class="material-icons left">check</i> Saved'});
  });

  $(".saveIcon").on("click", function() {
    let $this = $(this);
    let dataIndex = $this.closest('form').find('.toDofield').attr('data-index');
    let dataToDo = $this.closest('form').find('.toDofield').val();

    toDos[dataIndex] = dataToDo;

    localStorage.setItem("savedToDos", JSON.stringify(toDos));

    M.toast({html: '<i class="material-icons left">check</i> Saved'});
    
  });

});

