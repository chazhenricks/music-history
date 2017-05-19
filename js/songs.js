var Songs = (function(songlist){
  var musicHTML = "";

// Ajax call to grab songs from first JSON
  songlist.ajaxCall1 = function(){
    $.ajax({
      url : "music.json"
    })
    .done(songlist.populateDOM).done(songlist.ajaxCall2);
  };

//Ajax call to grab songs from second JSON
  songlist.ajaxCall2 = function(){
    $.ajax({
      url : "music2.json"
    }).done(songlist.populateDOM).done(songlist.eventListeners);
  };

// Populates DOM with item from AJAX call
  songlist.populateDOM = function(musicList){
    console.log("musicList", musicList)

    musicHTML = "";

  for (var i=0;i<musicList.music.length;i++){
        musicHTML +=
         ` <section>
                  <header>
                    <h2>${musicList.music[i].song}</h2>
                  </header>
                  <ul>
                    <li>${musicList.music[i].artist}</li>
                    <li>${musicList.music[i].album}</li>
                    <li>${musicList.music[i].genre}</li>
                  <li><button class="delete">X</button></li>
                  </ul>
            </section>`
    }

  $("#song-list").append(musicHTML);
  //calls function to add click events to delete buttons
  songlist.addDelete();

};

//adds click events to delete buttons
songlist.addDelete = function(){

  $(".delete").click(function(){
     var getOuttaHere = event.target.closest("section");
      console.log("getOuttaHere", getOuttaHere);
      getOuttaHere.remove(getOuttaHere);
  });
};

songlist.eventListeners = function(){
  var addMusicPage = $("#add-music");
  var songListPage = $("#song-list");
  var filtersPage = $("#filters");

  $("#view-music-button").click(function(){
    addMusicPage.addClass("hidden");
    songListPage.removeClass("hidden");
    filtersPage.removeClass("hidden");
  });

  $("#add-music-button").click(function(){
    addMusicPage.removeClass("hidden");
    songListPage.addClass("hidden");
    filtersPage.addClass("hidden");
  });

  $("#add-button").click(function(){
    var newSong = {
      "music":[{
      "artist": $("#add-artist").val(),
      "song": $("#add-song").val(),
      "album": $("#add-album").val(),
      "genre": $("#add-genre").val()
    }]};
    console.log("newSong", newSong);
    songlist.populateDOM(newSong);
  });

};
  return songlist;

})(Songs || {})

Songs.ajaxCall1();












































