const gameName = document.querySelector(".gameName");
const gameLink = document.querySelector(".gameLink");
const gameImg = document.querySelector(".gameImg");
const btn = document.querySelector(".btn");

function checkInputs() {
    if (gameName.value && gameLink.value && gameImg.files.length > 0) {
        const file = gameImg.files[0];
        const fileName = file.name;

        let htmlContent = `
        <div class="game">
            <a class="linkGame" href="${gameLink.value}" target="_blank" rel="noopener noreferrer"></a>
            <img class="imgGame" src="${fileName}" alt="Pixel Adventure">
            <div class="titreGame">${gameName.value}</div>
            <div class="eval">
                <div class="blockEval">
                    <img class="imgEval imgLike" src="like.png" alt="Like">
                    <div class="nbEval nbLike">0</div>
                </div>
                <div class="blockEval">
                    <img class="imgEval imgDislike" src="dislike.png" alt="Dislike">
                    <div class="nbEval nbDislike">0</div>
                </div>
            </div>
        </div>;
        `;

    } else {
        alert("Veuillez entrer toutes les informations.");
    }
}

btn.addEventListener("click", checkInputs);
