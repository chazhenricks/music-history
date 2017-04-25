var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";



//Add one song to the beginning and the end of the array.
songs.push("Do You Still Love Me > by Ryan Adams on the album Prisoner");
songs.unshift("Typical > by Mutemath on the album Mutemath")

//Take input from add music page and add to songs[];
var addSong = document.getElementById("add-song");
var addArtist = document.getElementById("add-artist");
var addAlbum = document.getElementById("add-album");
var addButton = document.getElementById("add-button");

addButton.addEventListener("click", addToList);

function addToList(event){
  songs.push(`${addSong.value} - by ${addArtist.value} on the album ${addAlbum.value}`);
  console.log(addSong.value, addArtist.value, addAlbum.value);
  console.log("songs", songs);
  songList.innerHTML +=
                    `<section>
                      <header>
                        <h2>${addSong.value}</h2>
                      </header>
                      <ul>
                        <li>${addArtist.value}</li>
                        <li>${addAlbum.value}</li>
                        <li>Genre</li>
                      </ul>
                    </section>`;

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

  console.log("addMusicPage class", addMusicPage.classList);
  console.log("musicFilterPage class", musicFilterPage.classList);
  console.log("songsListPage", songsListPage.classList);
};

function hideAddMusic(event){
  addMusicPage.classList.add("hidden")

  songsListPage.classList.remove("hidden");

  musicFilterPage.classList.remove("hidden");

  console.log("addMusicPage class", addMusicPage.classList);
  console.log("musicFilterPage class", musicFilterPage.classList);
  console.log("songsListPage", songsListPage.classList);
};



//Loop over the array, and remove any words or characters that obviously don't belong.
songs.forEach(function(element, index, array){
  array[index] = element.replace(/[@*()!]/g, "");
})


//Find and replace the > character in each item with a - character.
songs.forEach(function(element, index, array){
  array[index] = element.replace(/[>]/g, "-");
})


// //Add each string to the DOM in index.html in the main content area.


//   //SONG
//     //identify where song names begin
//     //identify where song names end
//     //slice the string from the array from song name beginning and ending and put in new var
//     //select element where song name needs to go
//     //set innerHTML of element to var containing song name
//     var songNamesDom = [];
//     songNamesDom = document.getElementsByClassName("song-name");
//     songs.forEach(function(element, index, array){
//       var songStart = 0;
//       var songEnd = element.indexOf(" -");
//       var songName = element.slice(songStart, songEnd);
//       songNamesDom[index].innerHTML = songName;
//     })



//   //Artist
//     //identify where artist names begin
//     //identify where artist names end
//     //slice the string from the array from artist name beginning and ending and put in new var
//     //select element where artist name needs to go
//     //set innerHTML of element to var containing artist name

//     var artistNamesDom = [];
//     artistNamesDom = document.getElementsByClassName("artist-name");
//     songs.forEach(function(element, index, array){
//       var artistStart = element.indexOf("y ") + 2;
//       var artistEnd = element.indexOf(" on");
//       var artistName = element.slice(artistStart, artistEnd);
//       artistNamesDom[index].innerHTML = artistName;
//     })

//   //Album
//     //identify where album names begin
//     //identify where album names end
//     //slice the string from the array from album name beginning and ending and put in new var
//     //select element where album name needs to go
//     //set innerHTML of element to var containing album name

//     var albumNamesDom = [];
//     albumNamesDom = document.getElementsByClassName("album-name");
//     songs.forEach(function(element, index, array){
//       var albumStart = element.indexOf("um ") + 3;
//       var albumEnd = element.length;
//       var albumName = element.slice(albumStart, albumEnd);
//       albumNamesDom[index].innerHTML = albumName;
//     })
  var songList = document.getElementById("song-list");

  songs.forEach(function(element, index, array){
      var songStart = 0;
      var songEnd = element.indexOf(" -");
      var songName = element.slice(songStart, songEnd);

      var artistStart = element.indexOf("y ") + 2;
      var artistEnd = element.indexOf(" on");
      var artistName = element.slice(artistStart, artistEnd);

      var albumStart = element.indexOf("um ") + 3;
      var albumEnd = element.length;
      var albumName = element.slice(albumStart, albumEnd);

      var items = ` <section>
                      <header>
                        <h2>${songName}</h2>
                      </header>
                      <ul>
                        <li>${artistName}</li>
                        <li>${albumName}</li>
                        <li>Genre</li>
                      </ul>
                    </section>`;
      songList.innerHTML += items;
  })




