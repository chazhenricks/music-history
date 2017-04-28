//Setting up XHR for music
var musicRequest = new XMLHttpRequest();
musicRequest.open("GET", "music.json");
musicRequest.send();

//declaring event listeners for XHR
musicRequest.addEventListener("load", getMusic);

//declaring variable to store music
var musicList = "";

//declaring HTML element for musicList to go
var songList = document.getElementById("song-list");

//getMusic function that runs when page loads
function getMusic(event){
    musicList = JSON.parse(this.responseText);
    populateDOM();
  };


function populateDOM(){
    var musicHTML = "";

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

  songList.innerHTML = musicHTML;
  addDelete();
};

//Add event listeners to delete buttons to remove
function addDelete(){
  var deleteBtns = document.getElementsByClassName("delete");
  console.log("deleteBtns", deleteBtns);
  for (var i=0;i<deleteBtns.length;i++){
      deleteBtns.item(i).addEventListener("click", function(event){
        var getOuttaHere = event.target.closest("section");
        console.log("getOuttaHere", getOuttaHere);
        getOuttaHere.remove(getOuttaHere);
      });
  }
}


//Addevent listener to hide and unhide the add music page and filters and

var viewMusicButton = document.getElementById("view-music-button");
var addMusicButton = document.getElementById("add-music-button");

var addMusicPage = document.getElementById("add-music");
var musicFilterPage = document.getElementById("filters");
var songsListPage = document.getElementById("song-list");


addMusicButton.addEventListener("click", showAddMusic);
viewMusicButton.addEventListener("click", hideAddMusic);

function showAddMusic(event){
  addMusicPage.classList.remove("hidden");
  songsListPage.classList.add("hidden")
  musicFilterPage.classList.add("hidden")

};

function hideAddMusic(event){
  addMusicPage.classList.add("hidden")
  songsListPage.classList.remove("hidden");
  musicFilterPage.classList.remove("hidden");


};


//Add button on Add Music page pushed another item to music.json file

var addBtn = document.getElementById("add-button");

addBtn.addEventListener("click", function(event){
  var newArtist = document.getElementById("add-artist");
  var newSong = document.getElementById("add-song");
  var newAlbum = document.getElementById("add-song");
  var newGenre = document.getElementById("add-genre")

  musicList.music.push(
    {
      "artist": newArtist.value,
      "song": newSong.value,
      "album": newAlbum.value,
      "genre": newGenre.value
    });
  populateDOM();
});












































