const blockGame = document.querySelector(".blockGame");

let btnLike, btnDislike, like, dislike, gameLike, gameDislike;

function addGame(link, img, title) {
    let htmlContent = `
    <div class="game">
        <a class="linkGame" href="${link}" target="_blank" rel="noopener noreferrer"></a>
        <img class="imgGame" src="${img}" alt="imgGame">
        <div class="titreGame">${title}</div>
        <div class="eval">
            <div class="blockEval">
                <img class="imgEval imgLike" src="like.png" alt="Like">
                <div class="nbEval nbLike">0</div>
            </div>
            <div class="blockEval">
                <img class="imgEval imgDislike" src="like.png" alt="Dislike">
                <div class="nbEval nbDislike">0</div>
            </div>
        </div>
    </div>
    `;
    blockGame.innerHTML += htmlContent;

    updateGameButtons();
}

function updateGameButtons() {
    btnLike = document.querySelectorAll(".imgLike");  
    btnDislike = document.querySelectorAll(".imgDislike");  
    like = document.querySelectorAll(".nbLike");  
    dislike = document.querySelectorAll(".nbDislike");  

    gameLike = Array(btnLike.length).fill(false);
    gameDislike = Array(btnDislike.length).fill(false);

    loadImageState();

    addEventListeners(btnLike, like, gameLike, "like-active.png", "like.png", btnDislike, dislike, gameDislike);
    addEventListeners(btnDislike, dislike, gameDislike, "like-active.png", "like.png", btnLike, like, gameLike);
}

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

        if (btnLike.length > 0) {
            savedState.likeImages.forEach((src, index) => {
                if (btnLike[index]) {
                    btnLike[index].src = src;
                }
            });
        }

        if (btnDislike.length > 0) {
            savedState.dislikeImages.forEach((src, index) => {
                if (btnDislike[index]) {
                    btnDislike[index].src = src;
                }
            });
        }
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













