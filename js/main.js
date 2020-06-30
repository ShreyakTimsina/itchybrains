const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#previous");

const audioContainer = document.querySelector(".audio-container");
const playIcon = document.querySelector(".play-icon");
const progress = document.querySelector(".progress");

const audio = document.querySelector("audio");
const title = document.querySelector("#audio-title");

// Update progress bar

audio.addEventListener("timeupdate", function (e) {
  let { duration, currentTime } = e.srcElement;
  let progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

// Click Progrress Bar
document
  .querySelector(".progress-container")
  .addEventListener("click", function (e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  });

//   Pausing After Completion

audio.addEventListener("ended", function () {
  audioContainer.classList.toggle("play");
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");

  progress.style.width = `0%`;
});

// Play pause button
playBtn.addEventListener("click", function () {
  let isPlaying = audioContainer.classList.contains("play");

  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }

  audioContainer.classList.toggle("play");
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
});

// Playing Songs from the list

document.querySelector(".toxicity").addEventListener("click", function () {
  audio.src = "audio/Toxicity.m4a";
  title.innerHTML = "Toxicity";
  audio.play();
});

document
  .querySelector(".eye-of-the-tiger")
  .addEventListener("click", function () {
    audio.src = "audio/Eye-of-the-tiger.m4a";
    title.innerHTML = "Eye Of The Tiger";
    audio.play();
  });

document.querySelector(".monika").addEventListener("click", function () {
  audio.src = "audio/Hej-monika.mp3";
  title.innerHTML = "Hej Monika";
  audio.play();
});

document.querySelector(".bistarai").addEventListener("click", function () {
  audio.src = "audio/Bistarai.mp3";
  title.innerHTML = "Bistarai Bistarai";
  audio.play();
});
