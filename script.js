//------Https------\\

/*if (window.location.protocol != "https:") {
    window.location.protocol="https:";
}*/

const btnLike = document.querySelectorAll(".imgLike");  
const btnDislike = document.querySelectorAll(".imgDislike");  
const like = document.querySelectorAll(".nbLike");  
const dislike = document.querySelectorAll(".nbDislike");  

let gameLike = Array(btnLike.length).fill(false);
let gameDislike = Array(btnDislike.length).fill(false);

function saveImageState() {
    const imageStates = {
        like: gameLike,
        dislike: gameDislike,
        likeImages: Array.from(btnLike).map(button => button.src),
        dislikeImages: Array.from(btnDislike).map(button => button.src),
    };
    localStorage.setItem("imageState", JSON.stringify(imageStates));
}

function loadImageState() {
    const savedState = JSON.parse(localStorage.getItem("imageState"));
    if (savedState) {
        gameLike = savedState.like || Array(btnLike.length).fill(false);
        gameDislike = savedState.dislike || Array(btnDislike.length).fill(false);

        savedState.likeImages.forEach((src, index) => {
            btnLike[index].src = src;
        });
        savedState.dislikeImages.forEach((src, index) => {
            btnDislike[index].src = src;
        });
    }
}

function toggleButton(buttons, counters, gameState, index, activeSrc, inactiveSrc, oppositeButtons, oppositeCounters, oppositeState) {
    let increment;

    if (gameState[index]) {
    increment = -1;
    } else {
    increment = 1;
    }

    counters[index].textContent = Math.max(0, parseInt(counters[index].textContent) + increment);

    if (gameState[index]) {
        buttons[index].src = inactiveSrc;
    } else {
        buttons[index].src = activeSrc;
    }   

    gameState[index] = !gameState[index];

    if (oppositeState[index]) {
        oppositeCounters[index].textContent = Math.max(0, parseInt(oppositeCounters[index].textContent) - 1);
        oppositeButtons[index].src = inactiveSrc;
        oppositeState[index] = false;
    }

    saveImageState();
}

function addEventListeners(buttons, counters, gameState, activeSrc, inactiveSrc, oppositeButtons, oppositeCounters, oppositeState) {
    buttons.forEach((button, index) => {
        button.onclick = () => toggleButton(buttons, counters, gameState, index, activeSrc, inactiveSrc, oppositeButtons, oppositeCounters, oppositeState);
    });
}

loadImageState();

addEventListeners(btnLike, like, gameLike, "like-active.png", "like.png", btnDislike, dislike, gameDislike);
addEventListeners(btnDislike, dislike, gameDislike, "like-active.png", "like.png", btnLike, like, gameLike);




const btnMoreLike = document.querySelector(".moreLike");
const btnLessLike = document.querySelector(".lessLike");
const games = document.querySelectorAll(".game");

function getLikes(game) {
  return parseInt(game.querySelector(".nbLike").textContent);
}

function sortGames(order) {
  const sortedGames = Array.from(games).sort((a, b) => {
    const likesA = getLikes(a);
    const likesB = getLikes(b);
    if (order === "asc") {
        return likesA - likesB;
      } else {
        return likesB - likesA;
      }      
  });

  games[0].parentElement.append(...sortedGames);
}

btnMoreLike.addEventListener("click", () => sortGames("desc"));
btnLessLike.addEventListener("click", () => sortGames("asc"));