const music=document.querySelector('audio');
const play = document.getElementById("play");
const img = document.querySelector('img');

let flagPlaying = false;

// for play
const playMusic=()=>{
    flagPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');
}

// for pause
const pauseMusic=()=>{
    flagPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
}

play.addEventListener('click',()=>{

    flagPlaying?pauseMusic():playMusic();
}
)

