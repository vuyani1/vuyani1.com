// script.js

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");
const videoPlayer = document.getElementById("videoPlayer");
const audioPlayer = document.getElementById("audioPlayer");
const localFileInput = document.getElementById("localFile");

if (searchButton && searchInput) {
  searchButton.addEventListener("click", searchOnline);
}

if (localFileInput) {
  localFileInput.addEventListener("change", playLocalFile);
}

function searchOnline() {
  const query = searchInput.value;
  if (navigator.onLine) {
    alert(`Searching for "${query}" online`);
    // Implement API search functionality here for online videos/music
  } else {
    alert("Offline: Only local files can be played.");
  }
}

function playLocalFile(event) {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    const isVideo = file.type.startsWith("video");
    if (isVideo) {
      videoPlayer.src = url;
      videoPlayer.style.display = "block";
      audioPlayer.style.display = "none";
      updateBackgroundColor("video");
    } else {
      audioPlayer.src = url;
      audioPlayer.style.display = "block";
      videoPlayer.style.display = "none";
      updateBackgroundColor("audio");
    }
  }
}

function updateBackgroundColor(type) {
  document.body.style.transition = "background 1s";
  if (type === "video") {
    document.body.style.background = "linear-gradient(135deg, orange, brown)";
  } else if (type === "audio") {
    document.body.style.background = "linear-gradient(135deg, black, white)";
  }
}
