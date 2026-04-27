const streamGrid = document.getElementById("streamGrid");
const streamInput = document.getElementById("streamInput");

function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("active");

  window.scrollTo(0, 0);
}

function getParentDomain() {
  if (window.location.hostname === "") {
    return "localhost";
  }
  return window.location.hostname;
}

function addStream() {
  const channel = streamInput.value.trim().toLowerCase();

  if (!channel) return;

  const parent = getParentDomain();

  const card = document.createElement("div");
  card.className = "stream-card";

  card.innerHTML = `
    <h2>${channel}</h2>
    <iframe
      src="https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true"
      allowfullscreen>
    </iframe>
  `;

  streamGrid.appendChild(card);
  streamInput.value = "";
}

function clearStreams() {
  streamGrid.innerHTML = "";
}

const videos = [
  "https://www.youtube.com/embed/5uE0XFJSVZA",
  "https://www.youtube.com/embed/3pLrJXo9L6I",
  "https://www.youtube.com/embed/jfKfPfyJRdk"
];

function shuffleVideo() {
  const frame = document.getElementById("youtubeFrame");
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  frame.src = randomVideo;
}

window.onload = function () {
  showTab("home");
  shuffleVideo();

  if (streamInput) {
    streamInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        addStream();
      }
    });
  }
};
