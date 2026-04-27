const streamGrid = document.getElementById("streamGrid");
const streamInput = document.getElementById("streamInput");

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
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
}
