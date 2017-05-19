"use strict";

let calls = require("./calls.js");

var songs = {};

songs.addSong = function(){
    $("#add-button").click(function(){
        var newSong = {};
        newSong.song = $("#add-song").val();
        newSong.album = $("#add-artist").val();
        newSong.artist = $("#add-album").val();
        newSong.genre = $("#add-genre").val();

        calls.addNewSong(newSong);

    });
};





module.exports = songs;




































