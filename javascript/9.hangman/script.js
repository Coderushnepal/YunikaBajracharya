var wordSection = document.getElementById("word");
var wrongLettersSection = document.getElementById("wrong-letters-container");
var playButton = document.getElementById("play-button");
var resultPopup = document.getElementById("result-popup");
var notification = document.getElementById("notification-container");
var result = document.getElementById("result");
var figureParts = document.querySelectorAll(".figure-part");
var hint = document.getElementById("hint");

var dictionary = [
    {
        word: "ethics",
        hint: "deciding what is morally right and wrong",
    },
    {
        word: "binary",
        hint: "base 2",
    },
    {
        word: "youtube",
        hint: "the world of video",
    },
    {
        word: "compiler",
        hint: "source code -> object code",
    },    {
        word: "bandwidth",
        hint: "maximum rate of data transfer",
    },
    {
        word: "graphics",
        hint: "pictures & films",
    },
    {
        word: "argument",
        hint: "used in function call",
    },
    {
        word: "assembler",
        hint: "mnemonic programming",
    },    {
        word: "pedagogy",
        hint: "a model of teaching and learning",
    },
]

var randomIndex = Math.floor(Math.random() * dictionary.length);
var randomWord = dictionary[randomIndex].word;
console.log(randomWord);
hint.innerHTML = `${dictionary[randomIndex].hint}`;

var matchedLetters = [];
var unmatchedLetters = [];

function displayWord() {
    wordSection.innerHTML = `
        ${randomWord.split("").map((letter) =>
                `<span class = "letter">
                    ${matchedLetters.includes(letter) ? letter : "."}
                </span>`
            ).join("")
        }
    `;
    
    var guessedWord = wordSection.innerText.replace(/\n/g,"");
    var guessedWord2 = guessedWord.replace(/ /g,"");
    if (guessedWord2 === randomWord) {
        wordSection.style.display = "none";
        result.innerText = "Congratulations! You Won :)";
        resultPopup.style.display = "block";
    }
};

function updateWrongLettersSection() {
    wrongLettersSection.innerHTML = `
    ${unmatchedLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${unmatchedLetters.map(letter => 
            `<span>${letter}</span>`
        )}
    `;

    figureParts.forEach((part, index) => {
        var errors = unmatchedLetters.length;
        if(index < errors) {
            part.style.display = "block";
        } else {
            part.style.display = "none";
        }
    });

    if (unmatchedLetters.length === figureParts.length) {
        wordSection.style.display = "none";
        result.innerHTML = "Unfortunately you lost :(";
        resultPopup.style.display = "block";
    }
};

function displayNotification() {
    notification.innerHTML = "You've already entered this letter";
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
};

playButton.addEventListener('click', function() {
    matchedLetters.splice(0);
    unmatchedLetters.splice(0);
    randomIndex = Math.floor(Math.random() * dictionary.length);
    randomWord = dictionary[randomIndex].word;
    console.log(randomWord);
    hint.innerHTML = `${dictionary[randomIndex].hint}`;
    displayWord();
    updateWrongLettersSection();
    resultPopup.style.display = "none";
    wordSection.style.display = "block";
});

displayWord();

function check (event) {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        var inputLetter = (event.key).toLowerCase();      
        if(randomWord.includes(inputLetter)) {
            if(!matchedLetters.includes(inputLetter)) {
                matchedLetters.push(inputLetter);
                displayWord();
            } 
            else displayNotification();
        } 
        else {
            if(!unmatchedLetters.includes(inputLetter)) {
                unmatchedLetters.push(inputLetter);
                updateWrongLettersSection();
            } else displayNotification();
        }
    }
}

window.addEventListener("keydown", check);