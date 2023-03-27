const seriesName = document.querySelector(".series-name");
const suggestionText = document.querySelector(".suggestion-text");
const suggestionBtn = document.getElementById("suggestion-btn");
const EpisodeLinkBtn = document.getElementById("episode-link-btn");
let episodeLink = document.getElementById("episode-link");
let seasonNumber = document.querySelector(".season-number");
let episodeNumber = document.querySelector(".episode-number");

const suggestionTexts = [
  "It's a very complex yet mysterious and beautiful episode.",
  "A very emotional and mysterious episode",
  "A mysterious episode that makes you cry and laugh at the same time",
];

suggestionBtn.addEventListener("click", function ChangeEpisodeSuggestion() {
  seasonNumber.innerHTML = getRandomSeasonNumber();
  episodeNumber.innerHTML = getRandomEpisodeNumber();
  suggestionText.innerHTML = suggestionTexts[getRandomText()];

  episodeLink.setAttribute(
    `href`,
    `https://www.dizigom.tv/monk-${seasonNumber.innerHTML}-sezon-${episodeNumber.innerHTML}-bolum-hd1/`
  );

  function getRandomSeasonNumber() {
    return Math.ceil(Math.random() * 8);
  }
  function getRandomEpisodeNumber() {
    return Math.ceil(Math.random() * 16);
  }
  function getRandomText() {
    return Math.floor(Math.random() * 3);
  }
});
