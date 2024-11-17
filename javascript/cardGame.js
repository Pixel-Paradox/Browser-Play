const blockGame = document.querySelector(".blockGame");
const gameIframe = document.querySelector(".gameIframe");
const gameTitle = document.querySelector(".gameTitre");

function addGame(img, title, likes, dislikes) {
    let htmlContent = `
    <div class="game">
        <a class="linkGame" href="game/index.html"></a>
        <img class="imgGame" src="${img}" alt="imgGame">
        <div class="titreGame">${title}</div>
        <div class="eval">
            <div class="blockEval">
                <img class="imgEval imgLike" src="images/like.png" alt="Like">
                <div class="nbEval nbLike">${likes}</div>
            </div>
            <div class="blockEval">
                <img class="imgEval imgDislike" src="images/like.png" alt="Dislike">
                <div class="nbEval nbDislike">${dislikes}</div>
            </div>
        </div>
    </div>
    `;
    blockGame.innerHTML += htmlContent;
}

async function getGames() {
    try {
        const response = await fetch('api/games.php');
        const games = await response.json();
        games.forEach(game => {
            addGame("images/game.png", game.name, game.likes, game.dislikes);
        });
  
    } catch (error) {
        console.error('Erreur: ', error);
    }
}
getGames();