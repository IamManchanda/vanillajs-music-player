const image = document.getElementById("image");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.getElementById("music");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

let isPlaying = false;
let songIndex = 0;
const songs = [
  {
    ytImageId: "atVof3pjT-I",
    fileName: "kaun-tujhe-original-hindi",
    displayName: "Kaun Tujhe (Original Hindi)",
    artist: "Palak Muchhal",
  },
  {
    ytImageId: "FDe9nYJXWco",
    fileName: "kaun-tujhe-english-version",
    displayName: "Kaun Tujhe (English version)",
    artist: "Emma Heesters",
  },
  {
    ytImageId: "7vNQZEMgo4w",
    fileName: "teri-mitti-female-version",
    displayName: "Teri Mitti (Female version)",
    artist: "Parineeti Chopra",
  },
  {
    ytImageId: "wF_B_aagLfI",
    fileName: "teri-mitti-male-version",
    displayName: "Teri Mitti (Male version)",
    artist: "B Praak",
  },
];

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.fileName}.mp3`;
  image.src = `https://img.youtube.com/vi/${song.ytImageId}/maxresdefault.jpg`;
}

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

function handlePrevSong() {
  songIndex -= 1;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  handlePlaySong();
}

function handleNextSong() {
  songIndex += 1;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  handlePlaySong();
}

function handleProgressBarUpdate(event) {
  if (isPlaying) {
    const { duration, currentTime } = event.srcElement;
    console.log({ duration, currentTime });
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}

loadSong(songs[songIndex]);

prevButton.addEventListener("click", handlePrevSong);
playButton.addEventListener("click", handlePlayOrPause);
nextButton.addEventListener("click", handleNextSong);
music.addEventListener("timeupdate", handleProgressBarUpdate);
