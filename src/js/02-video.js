import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const player = new Player(document.querySelector("iframe"));

const funPause = function(){player.getCurrentTime().then(function(time){

    console.log("time", time);
    localStorage.setItem("videoplayer-current-time", time);
   /* if(pause){
        console.log("pause:", pause);
        player.getCurrentTime().then(function(time){
            console.log("time", time);
            localStorage.setItem("videoplayer-current-time", time)
        })
    }*/
})}

player.on("timeupdate", throttle(funPause, 1000));

window.addEventListener('load',function(){
    if(this.localStorage.getItem("videoplayer-current-time")){
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    }
    
})

