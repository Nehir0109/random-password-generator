const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const lengthInput = document.getElementById("lengthInput");
const generateBtn = document.getElementById("generateBtn");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 12;

function getRandomCharacter() {     // buradan characters array'inden rastgele bir karakter alıyoruz.
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + getRandomCharacter();
  }
  return randomPassword;
}


function generatePassword() {     // ürettiğimiz random password'leri ekrana yazdırmayı sağlıyor
  result1.innerText = generateRandomPassword();
  result2.innerText = generateRandomPassword();
}

generateBtn.disabled = true;

lengthInput.addEventListener("change", (e) => {
    if (e.target.value > 20) {
      e.target.value = 20;
    }

    passwordLength = e.target.value;
    generateBtn.disabled = false;
});



