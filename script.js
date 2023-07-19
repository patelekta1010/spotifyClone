//initialize the Variables
let songIndex = 0;
let audioElement = new Audio("/song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let song = [
  {
    songName: "Agar TumSath Ho",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Agar TumSath Ho",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Agar TumSath Ho",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Agar TumSath Ho",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Agar TumSath Ho",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    document.getElementById(
      "masterPlay"
    ).innerHTML = `<span class="material-symbols-outlined" id="masterPlay">
         pause
    </span>`;
  } else {
    audioElement.pause();
    document.getElementById(
      "masterPlay"
    ).innerHTML = `<span class="material-symbols-outlined" >
        play_arrow
       </span>`;
  }
});

//Listen to Events
myProgressBar.addEventListener("timeupdate", () => {
  console.log("timeupdate");
});
