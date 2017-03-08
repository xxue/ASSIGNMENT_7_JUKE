$(document).ready(function() {
// enter notes, get into the queue
  $('#song-form').submit(function(event){
    $('#play-button').slideDown(0);
    const inputnotes = $('#song-form input#notes').val();
    const inputnames = $('#song-form input#name').val();
    $('#song-queue').append('<li>' + inputnames + ": " + inputnotes + '</li>');
    event.preventDefault();
  });

// when first notes are played, remove it from queue, and keep playing
  const onComplete = function (){
    $('#song-queue > li').first().remove();
    if ($("#song-queue li").length === 0){
      $('#play-button').slideDown(50);
    } else {
    music()
    };
  };

// play first one in queue
  $('#play-button').click(function(event){
    music();
  });

  function music(){
    $('#play-button').slideUp(50);
    var tobeplayed = $('#song-queue > li').first().text().split(": ");
    let names = tobeplayed[0];
    let notes = parseSong(tobeplayed[1]);
    $('.songname').text(names);
    playSong(notes, 200, onComplete);
    }

  });
