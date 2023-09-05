const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const lengthInput = document.getElementById("lengthInput");
const generateBtn = document.getElementById("generateBtn");

let passwordLength = 12;

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword = "";
    for(let n=0; n< passwordLength; n++){
        randomPassword = randomPassword + getRandomCharacter();
    }
    return randomPassword;
}

function generatePassword() {
    result1.innerText = generateRandomPassword();
    result2.innerText = generateRandomPassword();
}

generateBtn.disabled = true;

lengthInput.addEventListener("change", (e) => {
  if (e.target.value > 20) {
    e.target.value = 20;
  }
  if (e.target.value <= 0) {
    generateBtn.disabled = true;
    generateBtn.style.backgroundColor = "#737373";
  } else {
    passwordLength = e.target.value;
    generateBtn.disabled = false;
    generateBtn.style.backgroundColor = "#10B981";
  }
});

function copy(copyElement) {
  const currentElement = document.getElementById(copyElement);
  let copyText = document.getElementById(copyElement).innerText; // result 1 ve 2'nin innerText'ini almak için

  if (copyText) {
    navigator.clipboard.writeText(copyText); //yazıyı kopyalamak için
    currentElement.innerText = "Copied!";
    setTimeout(() => {
      currentElement.innerText = copyText;
    }, 1000);
  } else {
    alert("You need provide a number to generate a password");
  }
}

//function copy1() {
    //let copyText1 = document.getElementById("result1").innerText;
    //navigator.clipboard.writeText(copyText1);
    //alert(`Password Copied On Clipboard! :  ` + copyText1 );
  //}

  //function copy2() {
    //let copyText2 = document.getElementById("result2").innerText;
    //navigator.clipboard.writeText(copyText2);
    //alert(`Password Copied On Clipboard! :  ` + copyText2 );
  //}
