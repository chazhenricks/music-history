var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";



//Add one song to the beginning and the end of the array.
songs.push("Do You Still Love Me > by Ryan Adams on the album Prisoner");
songs.unshift("Typical > by Mutemath on the album Mutemath")


//Loop over the array, and remove any words or characters that obviously don't belong.
songs.forEach(function(element, index, array){
  array[index] = element.replace(/[@*()!]/g, "");
})


//Find and replace the > character in each item with a - character.
songs.forEach(function(element, index, array){
  array[index] = element.replace(/[>]/g, "-");
})


//Add each string to the DOM in index.html in the main content area.





