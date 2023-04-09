let words = ["javascript", "html", "css"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "*";
}
let remainingLetters = word.length;

while (remainingLetters > 0) {
  // kelimeyi göster
  document.getElementById("word").innerHTML = answerArray.join(" ");

  // kullanıcının tahmini
  let guess = prompt("Harf tahmininizi girin:");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Lütfen bir harf girin.");
  } else {
    // harfin doğruluğunu kontrolü
    let correctGuess = false;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase()) {
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
        correctGuess = true;
      }
    }
    if (!correctGuess) {
      // yanlış tahmin
      let wrongGuesses = document.getElementById("guesses").innerHTML;
      document.getElementById("guesses").innerHTML = wrongGuesses + guess.toLowerCase() + " ";
    }
  }
}

// oyun sonu mesajı
if (remainingLetters === 0) {
  alert("Tebrikler! Doğru kelimeyi tahmin ettiniz.");
} else {
  alert("Maalesef, kelimeyi tahmin edemediniz. Doğru kelime: " + word);
}