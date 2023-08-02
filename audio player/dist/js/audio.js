const song = document.querySelector(".playsong")

const song_progress = document.querySelector("#song")

const start_time = document.querySelector("#start_time")
const stop_time = document.querySelector("#stop_time")
const play_button = document.querySelector("#play-pause-btn")


song.onloadeddata = () => {
    song_progress.max = song.duration;
    song_progress.value = song.currentTime;
    var currentTime = song.duration;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    var formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    stop_time.textContent = formattedTime;
}

document.querySelector('.play').addEventListener("click", () => {
    if (song.paused) {
        song.play();
    } 
    else {
        song.pause();
    }
})

song.onpause=()=>{
    play_button.innerHTML=`<path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>`
}
song.onplay=()=>{
    play_button.innerHTML=`<path d="M370-320h60v-320h-60v320Zm160 0h60v-320h-60v320ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>`
}

song_progress.addEventListener('change', () => {
    song.pause()
    song.currentTime = song_progress.value;
    song.play()
})


song.ontimeupdate=()=>{
    var currentTime = song.currentTime;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    var formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    start_time.textContent = formattedTime;
    song_progress.value=song.currentTime
}

