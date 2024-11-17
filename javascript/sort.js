const btnMoreLike = document.querySelector(".moreLike");
const btnMoreDislike = document.querySelector(".moreDislike");
const nbDislike = document.querySelector(".nbLike")
const nbLike = document.querySelector(".nbLike")
let games = document.querySelectorAll(".game");

function updateGames() {
  games = document.querySelectorAll(".game");
}

function getScore(game, type) {
  const scoreElement = game.querySelector(`.nb${type.charAt(0).toUpperCase() + type.slice(1)}`);
  return parseInt(scoreElement.textContent, 10); 
}

function sortGames(type) {
  const sortedGames = Array.from(games).sort((a, b) => {
    const scoreA = getScore(a, type);
    const scoreB = getScore(b, type);
    return scoreB - scoreA;   
  });

  blockGame.innerHTML = '';
  sortedGames.forEach(game => blockGame.appendChild(game));
  }

btnMoreLike.addEventListener("click", () => {
  sortGames("like");
});

btnMoreDislike.addEventListener("click", () => {
  sortGames("dislike");
});