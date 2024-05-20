const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");

//View Album Button Definition
var accordion = document.getElementsByClassName("accordian"); var i;


video.removeAttribute("controls");

// playPauseBtn.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Progressbar

video.addEventListener("timeupdate", updateProgressBar);
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
  
// Repeat Button

let vid = document.getElementById("custom-video-player");

function enableLoop() { 
  vid.loop = true;
  vid.load();
} 

// Status Button Code > used to check if loop function was working, it is :D 

// function checkLoop() { 
//   alert(vid.loop);
// } 

// Fullscreen Button

var elem = document.getElementById("custom-video-player");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
// not sure if needed, found these codes while doing some research on creating the fullscreen button:
    else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


// Accordian View Album Button

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Allows for toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

