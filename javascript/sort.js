const btnMoreLike = document.querySelector(".moreLike");
const btnMoreDislike = document.querySelector(".moreDislike");
const games = document.querySelectorAll(".game");

function getScore(game, type) {
    let count;
    if (type === "like") {
        count = parseInt(game.querySelector(".nbLike").textContent);
    } else {
        count = parseInt(game.querySelector(".nbDislike").textContent);
    }
    return count;
}

function sortGames(type) {
  const sortedGames = Array.from(games).sort((a, b) => {
    const scoreA = getScore(a, type);
    const scoreB = getScore(b, type);
    return scoreB - scoreA;   
  });

  games[0].parentElement.append(...sortedGames);
}

btnMoreLike.addEventListener("click", () => sortGames("like"));
btnMoreDislike.addEventListener("click", () => sortGames("dislike"));