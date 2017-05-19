"use strict";

let songs = require('./songs.js'),
    Handlebars = require('hbsfy/runtime'),
    listeners = require('./listeners.js'),
    songTemplate = require('../templates/songlist.hbs'),
    filter = require("./filter.js"),
    calls = require('./calls.js');




  calls.getSongs().then(data =>{
    console.log(data);
    $("#song-list").append(songTemplate(data));
  }).then(()=>{
    listeners.addMusicView();
    listeners.viewMusic();
    songs.addSong();
    filter.userInput();
  });






