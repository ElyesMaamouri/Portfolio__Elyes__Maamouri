// Play video
const myVideo = document.getElementById("video");
function playPause() {
  myVideo.play();
}
// Hide button play after launch video
const media = document.querySelector(".media");
const btnPlay = document.getElementById("btn-play");
media.addEventListener("click", () => {
  btnPlay.style.display = "none";
});
//Display video controls
const videoControls = document.getElementById("video");
video.addEventListener(
  "click",
  function () {
    videoControls.controls = true;
  },
  false
);
