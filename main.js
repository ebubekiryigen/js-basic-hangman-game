    const words = ["javascript", "html", "css", "react", "angular", "node"];
    let selectedWord = "";
    const correctLetters = [];
    const wrongLetters = [];
    const wordEl = document.getElementById("word");
    const wrongLettersEl = document.getElementById("wrong-letters");
    const hangmanEl = document.getElementById("hangman");
    const canvas = hangmanEl.getContext("2d");
    function draw() {
    canvas.clearRect(0, 0, hangmanEl.width, hangmanEl.height);
    canvas.beginPath();
    canvas.arc(60, 25, 10, 0, Math.PI * 2);
    canvas.stroke();

    if (wrongLetters.length > 0) {
        canvas.beginPath();
        canvas.moveTo(60, 35);
        canvas.lineTo(60, 70);
        canvas.stroke();

        if (wrongLetters.length > 1) {
        canvas.beginPath();
        canvas.moveTo(60, 40);
        canvas.lineTo(30, 55);
        canvas.stroke();

        if (wrongLetters.length > 2) {
            canvas.beginPath();
            canvas.moveTo(60, 40);
            canvas.lineTo(90, 55);
            canvas.stroke();

            if (wrongLetters.length > 3) {
            canvas.beginPath();
            canvas.moveTo(60, 70);
            canvas.lineTo(30, 90);
            canvas.stroke();

            if (wrongLetters.length > 4) {
                canvas.beginPath();
                canvas.moveTo(60, 70);
                canvas.lineTo(90, 90);
                canvas.stroke();
            }
            }
        }
        }
    }

    wordEl.innerHTML = `
    ${selectedWord
        .split("")
        .map(
            (letter) => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </span>
            `
        )
        .join("")}
    `;

    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? "<h3>Wrong Letters</h3>" : ""}
        ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

    if (correctLetters.length === selectedWord.length) {
        setTimeout(() => {
        alert("You won!");
        location.reload();
        }, 1000);
    }

    if (wrongLetters.length === 5) {
        setTimeout(() => {
        alert("You lost!");
        location.reload();
        }, 1000);
    }
    }

    window.addEventListener("keydown", (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();
        if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);
            draw();
        }
        } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            draw();
        }
        }
    }
    });

    function selectWord() {
    const index = Math.floor(Math.random() * words.length);
    selectedWord = words[index];
    }

    function init() {
    selectWord();
    draw();
    }

    init();
