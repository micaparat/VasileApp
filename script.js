let strings = [
  "Dar ce",
  "Ce sa gatesc azi la aia micii?",
  "Am tot facut ciorba de leustean, nu stiu ce sa gatesc azi.",
  "Dar daca ne invadeaza rusi, eu ce le pun pe masa?",
  "Am epuizat conversatia asta deja de 40 de minute, ce sa mai gatesc azi?",
  "Repede, zi-mi ce sa gatesc azi, vin socrii din Dragomiresti si Costel e alergic la sare si apa",
  "Ce sa mai gatesc azi? Am doar o varza si ketchup.",
  "Ce-as putea sa mai gatesc azi?"

];

const answers = [
  "Fa o piftie cu picioarele alea de porc din congelator.",
  "Hm, de ce nu faci un gulas cu curry? am vazut eu pe romaniaTV!",
  "De cand n-ai mai gatit o musaca cu soia?",
  "Au aprobat Comisia Europeana insecte pentru consum uman, scoate tigaia aia mare ca ai casa plina de gandaci",
  "O pizza cu felii de paine pe post de blat si parizer?",
  "E 21 decebrie? Fa o pomana porcului vegana",
  "Fa la copii un pandispan cu masline",
  "Te-ai gandit la un piure cu arici de mare? Astia zic ca e meditrenean",
  "Niste spaghete cu ketchup?"
]; // array of strings to display

let stringIndex = Math.floor(Math.random() * strings.length);
let characterIndex = 0;
let inputField = document.getElementById("input-field");
let submitButton = document.getElementById("submit-button");
let chatWindow = document.getElementById("chat-window");
let fakeGptWindow = document.getElementById("fake-gpt-window");


const delay = 50; // delay in milliseconds between each character
let i = Math.floor(Math.random() * answers.length); // index of current answer string
let j = 0; // index of current character in answer string
let divID = 0;
submitButton.disabled = true;

function replaceString() {

  let currentString = strings[stringIndex];
  if (characterIndex < currentString.length) {
    inputField.value += currentString.charAt(characterIndex);
    characterIndex++;
  }
  if (characterIndex >= currentString.length) {
    inputField.disabled = true;
    submitButton.disabled = false;
    submitButton.focus();
  }
}

function nextString() {

  createPrompt();
  inputField.value = "";
  if (stringIndex >= strings.length - 1) {
    stringIndex = 0;
  } else {
    stringIndex++;
  }
  characterIndex = 0;

  inputField.disabled = false;

  console.log(inputField.disabled);
  console.log(stringIndex);
  submitButton.disabled = true;
  inputField.focus();
  createAnswer();
  fakeGptWindow.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

}

function createPrompt() {
  // Get the text from the input field
  const inputField = document.getElementById("input-field");
  const text = inputField.value;

  // Create a new div element and set its text content
  const promptDiv = document.createElement("div");
  promptDiv.className = "chat-bubble blue";
  promptDiv.textContent = text;

  // Append the new div to the body element

  chatWindow.appendChild(promptDiv);
  fakeGptWindow.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

}

function createAnswer() {
  // Get the text from the array
  let answer = answers[i];
  // Create a new div element and set its text content
  const answerDiv = document.createElement("div");
  answerDiv.className = "chat-bubble gray";
  answerDiv.id = divID;
  chatWindow.appendChild(answerDiv);
  fakeGptWindow.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  typeWriter();

}



function typeWriter() {

  if (j < answers[i].length) {
    // display next character
    document.getElementById(divID).innerHTML += answers[i].charAt(j);
    j++;
    setTimeout(typeWriter, delay);
  } else {
    // move on to next string
    i++;
    divID++;
    if (i == answers.length) {
      // start over from beginning
      i = 0;
    }
    j = 0;

  }
  fakeGptWindow.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

}

