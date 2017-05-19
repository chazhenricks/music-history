"use strict";

let songTemplate = require("../templates/songlist.hbs");


let calls = {};

calls.getSongs = function(){
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: "https://music-history-fd721.firebaseio.com/.json",
            success: function(data){
                resolve(data);
                calls.data = data;
            }
        });
    });
};

calls.addNewSong = function(song){
    $.ajax({
       url: "https://music-history-fd721.firebaseio.com/music/.json",
       method: "POST",
       data: JSON.stringify(song)
    }).done(function(response){
        console.log("resonse from firebase", response);
    });
};

calls.pageLoad = function(){
    calls.getSongs().then(data =>{
        console.log(data);
        $("#song-list").html(songTemplate(data));
        });
};


module.exports = calls;
