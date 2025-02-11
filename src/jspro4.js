let index = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('play');
let play = document.getElementById('playMusic');
let gifbox = document.getElementById('gif');
let myProgress = document.getElementById('scrol');
let song = [
    {songName: "IK BAGAL", songPath: "1.mp3"},
    { songName: "Yo Yo Honey Singh", songPath: "2.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "3.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "4.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "5.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "6.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "7.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "8.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "9.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "10.mp3"},
    {songName: "Yo Yo Honey Singh", songPath: "11.mp3"},
    { songName: "Yo Yo Honey Singh", songPath: "12.mp3" },,
    { songName: "Yo Yo Honey Singh", songPath: "14.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "15.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "16.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "17.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "18.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "19.mp3" },
    { songName: "Yo Yo Honey Singh", songPath: "20.mp3"}
]


const songBox = document.querySelector(".songItemcont");

function songRender() {
    songBox.innerHTML = ""; 

    song.forEach((s, i) => {
        let songItem = document.createElement("div");
        songItem.classList.add("songItem");
        songItem.innerHTML = `
            <div class="songItem">
                <img src="logo.png">
                <span class="songName">${s.songName}</span>
                <span class="songlist">
                    <span class="timestamp" id="time-${i}"> </span> 
                    <span><img id="${i + 1}" class="playMusic" src="play_arrow.png"></span>
                </span>
            </div>
        `;

        songBox.appendChild(songItem);
        let audio = new Audio(s.songPath);
        audio.addEventListener("loadedmetadata", () => {
            let audioDuration = Math.floor(audio.duration);
            let min = Math.floor(audioDuration / 60);
            let sec = audioDuration % 60;
            let formattedTime = `${min}:${sec < 10 ? "0" + sec : sec}`;

            document.getElementById(`time-${i}`).textContent = formattedTime; // Update duration
        });
    });
}

// songRender();

songRender();



// play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.src = 'pause.png';
        play.src = 'pause.png';
        gifbox.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.src = 'play_arrow.png';
        play.src = 'play_arrow.png';
        gifbox.style.opacity = 0;
    }
});


audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value = progress;
});

myProgress.addEventListener('change', ()=>{
    audioElement.currentTime = myProgress.value*audioElement.duration/100;
});

const makeAllPaly = ()=>{
    Array.from(document.getElementsByClassName('playMusic')).forEach((element) =>{
        element.src = 'play_arrow.png';
        gifbox.style.opacity = 0;
    })
};

Array.from(document.getElementsByClassName('playMusic')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        const currentButton = e.target;
        if (currentButton.src.includes('pause.png')) {
            audioElement.pause();
            currentButton.src = 'play_arrow.png'; 
            gifbox.style.opacity = 0; 
        } else {
            makeAllPaly();
            const index = parseInt(currentButton.id);
            audioElement.src = `${index}.mp3`; 
            audioElement.currentTime = 0; 
            audioElement.play(); 
            currentButton.src = 'pause.png'; 
            gifbox.style.opacity = 1; 
        }
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if( index >= 20){
        index = 0;
    }
    else{
        index += 1;
    }
    makeAllPaly();
    audioElement.src = `${index}.mp3`;
    audioElement.currentTime = 0; 
    audioElement.play();  
    const currentButton = document.getElementById(index); 
    currentButton.src = 'pause.png'; 
    gifbox.style.opacity = 1;
});

document.getElementById('pre').addEventListener('click', ()=>{
    if( index <= 0){
        index = 20;
    }
    else{
        index -= 1;
    }
    makeAllPaly();
    audioElement.src = `${index}.mp3`;
    audioElement.currentTime = 0; 
    audioElement.play();  
    const currentButton = document.getElementById(index); 
    currentButton.src = 'pause.png'; 
    gifbox.style.opacity = 1;
});

