//Setting up XHR for music
var musicRequest = new XMLHttpRequest();
var musicRequest2 = new XMLHttpRequest();

musicRequest.open("GET", "music.json");
musicRequest2.open("GET", "music2.json");

musicRequest.send();
musicRequest2.send();


//declaring event listeners for XHR
musicRequest.addEventListener("load", getMusic);
musicRequest2.addEventListener("load", getMusic2);

//declaring variable to store parsed music JSON file
var musicList = "";
var musicList2 ="";


//variable for HTML elements to be written to page
var musicHTML = "";
var moreBtn = "";

//declaring HTML element for musicList to go
var songList = document.getElementById("song-list");

//getMusic function that runs when page loads
function getMusic(event){
    musicList = JSON.parse(this.responseText);
    populateDOM();
  };

  function getMusic2(event){
    musicList2 = JSON.parse(this.responseText);

  }

//Stores original music.json info to musicHTML var and writes to page.
function populateDOM(){
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

  musicHTML += `<button id="more">More</button>`;
  songList.innerHTML = musicHTML;

  //runs the function to add event listeners to all of the delete buttons
  addDelete();

//creates a "more" button and adds event listener to show music2 JSON file
  moreBtn = document.getElementById("more");
  moreBtn.addEventListener("click", function(event){
    populateDOM2();
  });
};

//function that adds info from music2 json file to var and adds to page
function populateDOM2 (){
  var musicHTML2 = "";
  for (var i=0;i<musicList2.music.length;i++){
         musicHTML2 +=
         ` <section>
                  <header>
                    <h2>${musicList2.music[i].song}</h2>
                  </header>
                  <ul>
                    <li>${musicList2.music[i].artist}</li>
                    <li>${musicList2.music[i].album}</li>
                    <li>${musicList2.music[i].genre}</li>
                  <li><button class="delete">X</button></li>
                  </ul>
            </section>`
    }

  //replaces DOM with original music.json info as well as the newly appended music2.json info
  songList.innerHTML = musicHTML;
  songList.innerHTML += musicHTML2;
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






//Add button on Add Music page pushed another item to music2.json file

var addBtn = document.getElementById("add-button");

addBtn.addEventListener("click", function(event){
  var newArtist = document.getElementById("add-artist");
  var newSong = document.getElementById("add-song");
  var newAlbum = document.getElementById("add-song");
  var newGenre = document.getElementById("add-genre")

  musicList2.music.push(
    {
      "artist": newArtist.value,
      "song": newSong.value,
      "album": newAlbum.value,
      "genre": newGenre.value
    });
  populateDOM2();
});












































