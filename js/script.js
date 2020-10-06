const music = document.getElementById("music");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

let isPlaying = false;

function handlePlaySong() {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute("title", "Pause");
  music.play();
}

function handlePauseSong() {
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "Play");
  music.pause();
}

function handlePlayOrPause() {
  return isPlaying ? handlePauseSong() : handlePlaySong();
}

playButton.addEventListener("click", handlePlayOrPause);
