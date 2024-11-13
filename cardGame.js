const blockGame = document.querySelector(".blockGame");
const gameIframe = document.querySelector(".gameIframe");
const gameTitle = document.querySelector(".gameTitre");

function addGame(variable, img, title) {
    let htmlContent = `
    <div class="game">
        <a class="linkGame" href="variable.html" data-url="${variable}" data-title="${title}"></a>
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
}

// Fonction pour mettre à jour l'iframe et le titre
function updateGameContent(url, title) {
    gameIframe.src = url;
    gameTitle.textContent = title;
}

blockGame.addEventListener("click", function(event) {
    const link = event.target.closest(".linkGame");
    if (link) {
        event.preventDefault();
        const url = link.getAttribute("data-url");
        const title = link.getAttribute("data-title");
        updateGameContent(url, title);
    }
});

addGame("https://rmbi.ch/vital/pad", "game.png", "Pixel Adventure");
addGame("https://aggar.io", "game.png", "Agar.io");
