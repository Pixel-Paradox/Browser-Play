const gameName = document.querySelector(".gameName");
const gameLink = document.querySelector(".gameLink");
const gameImg = document.querySelector(".gameImg");
const btnImg = document.querySelector(".btnImg");
const btnJs = document.querySelector(".btnJs");
const fileInput = document.querySelector(".fileAdd");

function handleFile() {
    if (gameName.value && gameLink.value && gameImg.files.length > 0) {
        const file = gameImg.files[0];

        addGameTxt = `addGame("${gameLink.value}", "${file.name}", "${gameName.value}");`;
    } else {
        alert("Veuillez entrer toutes les informations.");
    }
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const scriptContent = event.target.result;
            const combinedContent = scriptContent + "\n" + addGameTxt;
            console.log("Combined script content: ", combinedContent);
        };
        
        reader.readAsText(file);
    } else {
        alert('Veuillez sélectionner un fichier');
    }
}

