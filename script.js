const streamGrid = document.getElementById("streamGrid");
const streamInput = document.getElementById("streamInput");

function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
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

streamInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addStream();
  }
});
const videos = [
  "https://www.youtube.com/embed/videoseries?list=PLlW5c5f1SN2Zz4HjB0Q9dBKR8cMaT1N7U",
  "https://www.youtube.com/embed?listType=search&list=Fortnite%20tips",
  "https://www.youtube.com/embed?listType=search&list=Fortnite%20competitive",
  "https://www.youtube.com/embed?listType=search&list=Fortnite%20highlights"
];

const newsItems = [
  {
    title: "Official Fortnite News",
    text: "Latest Fortnite updates, announcements, and patch notes.",
    link: "https://www.fortnite.com/news"
  },
  {
    title: "Fortnite Competitive",
    text: "Tournament updates, ranked news, and competitive announcements.",
    link: "https://www.fortnite.com/news?category=fortnite-competitive"
  },
  {
    title: "Fortnite Ecosystem Release Notes",
    text: "UEFN, Creative, and ecosystem update notes.",
    link: "https://dev.epicgames.com/documentation/fortnite"
  }
];

function shuffleVideo() {
  const frame = document.getElementById("youtubeFrame");
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  frame.src = randomVideo;
}

function loadNews() {
  const newsList = document.getElementById("newsList");

  newsList.innerHTML = newsItems.map(item => `
    <div class="news-item">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a href="${item.link}" target="_blank">Read more</a>
    </div>
  `).join("");
}

shuffleVideo();
loadNews();
