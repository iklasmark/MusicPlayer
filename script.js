console.log("welcome to Spotify")

let songIndex;
let audioElement = new Audio('./songs/1.mp3');
let myprogresbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let mastersongName = document.getElementById("mastersongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterplay = document.getElementById("masterPlay");

let songs = [
    { songName: "Tum Hi Ho", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
    { songName: "Kesariya", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
    { songName: "Raatan Lambiyan ", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
    { songName: "Besharam Rang", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
    { songName: "Pasoori Shae Gill", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
    { songName: "Shayad", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
    { songName: "Ghungroo", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg" },
    { songName: "Jhoome Jo Pathaan", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg" },
    { songName: "Channa Mereya", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg" }
]

songItem.forEach((element, i) => {
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;

})



//audioElement.play();

//Handle play/pause click

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        gif.style.opacity = 0;
    }
})


//Listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate')
    //update progressbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myprogresbar.value = progress
})

myprogresbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogresbar.value * audioElement.duration) / 100;
})

Array.from(document.getElementsByClassName("eachsong")).forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log(e)
        songIndex = parseInt(e.target.id);
        console.log(songIndex)
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        mastersongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
    })
})

document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length-1;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

})
document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
})


