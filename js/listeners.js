"use strict";

let songs = require("./songs.js");
let main = require('./main.js');
let calls = require("./calls.js");

let listeners = {};

listeners.addMusicView = function(){
    $("#add-music-button").click(function(){
        listeners.toggleHide();
    });

};

listeners.viewMusic = function(){
    $("#view-music-button").click(function(){
        listeners.toggleHide();
       calls.pageLoad();

    });

};

listeners.toggleHide = function(){
        $("#add-music").toggleClass("hidden");
        $("#add-music-button").toggleClass("hidden");
        $("#view-music-button").toggleClass("hidden");
        $("#song-list").toggleClass("hidden");
        $("#filters").toggleClass("hidden");
};


module.exports = listeners;
