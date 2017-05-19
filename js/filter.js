"use strict";


let calls = require('./calls');
let songTemplate = require("../templates/songlist.hbs");

let filter = {};

filter.userInput = function(){
    let artistName = "";
    $("#filter-button").on("click", function(){
        artistName = $("#artist-select option:selected").val();
    filter.filterMusic(artistName);
    });

};

filter.filterMusic = function(artistName){
    let filteredMusic = {};


    calls.getSongs().then(data =>{


       for(var element in data.music){
            if(data.music[element].artist === artistName){
                filteredMusic.music= {"0":data.music[element]};
            }
        }
       // console.log(filteredMusic, artistName);
            console.log(filteredMusic);
        $("#song-list").html(songTemplate(filteredMusic));
    });

};


module.exports = filter;
