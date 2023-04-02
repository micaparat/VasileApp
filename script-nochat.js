let prompts = [

  "Dar ce sa",
  "Ce sa gatesc azi la aia micii?",
  "Am tot facut ciorba de leustean, nu stiu ce sa gatesc azi.",
  "Dar daca ne invadeaza rusi, eu ce le pun pe masa?",
  "Am epuizat conversatia asta deja de 40 de minute, ce sa mai gatesc azi?",
  "Repede, zi-mi ce sa gatesc azi, vin socrii din Dragomiresti si Costel e alergic la sare si apa",
  "Ce sa mai gatesc azi? Am doar o varza si ketchup.",
  "Ce-as putea sa mai gatesc azi?",
  "AKLJSKLS",
  "ALKDSLASD",
  "LKAJSOIDJ",
  "ENDDDDDD",

]; // array of prompts to display

let answers = [

  "Fa o piftie cu picioarele alea de porc din congelator.",
  "Hm, de ce nu faci un gulas cu curry? am vazut eu pe romaniaTV!",
  "De cand n-ai mai gatit o musaca cu soia?",
  "Au aprobat Comisia Europeana insecte pentru consum uman, scoate tigaia aia mare ca ai casa plina de gandaci",
  "O pizza cu felii de paine pe post de blat si parizer?",
  "E 21 decebrie? Fa o pomana porcului vegana",
  "Fa la copii un pandispan cu masline",
  "Te-ai gandit la un piure cu arici de mare? Astia zic ca e meditrenean",
  "Niste spaghete cu ketchup?"

]; // array of answers to display

let promptIndex = Math.floor(Math.random() * prompts.length);  // index of current prompt string
let answIndex = Math.floor(Math.random() * answers.length); // index of current answer string
let j = 0; // index of current character in answer string
let characterIndex = 0;
let inputField = document.getElementById("input-field");
let submitButton = document.getElementById("submit-button");
let chatWindow = document.getElementById("chat-window");
let fakeGptWindow = document.getElementById("fake-gpt-window");
let currentStrArray;
let currentStrIndex;
var thinkingSPinner = document.getElementById("thinking");
thinkingSPinner.style.display = "none";




const characterDelay = 25; // characterDelay in milliseconds between each character
const answerDelay = Math.floor(Math.random() * 3000); // characterDelay in milliseconds between question/answer

let divID = 0;

function resetRenderPrompt() {
  // reset input field and chat window
  chatWindow.innerHTML = "";
  submitButton.disabled = true;

  typeQuestion(() => {
    thinkingSPinner.style.display = "block";
    setTimeout(() => {
      thinkingSPinner.style.display = "none";
      typeAnswer(() => {
        submitButton.disabled = false;
        
      });
    }, Math.floor(Math.random() * 3000)); // wait for X milliseconds between the two functions
  });
}

function typeQuestion(callback) {
  const chatBubbleLeft = document.createElement("div");
  chatBubbleLeft.setAttribute("class", "chat-bubble left tri-right btm-left");
  chatWindow.appendChild(chatBubbleLeft);

  typeWriter(prompts, promptIndex, chatBubbleLeft, callback);
  if (promptIndex < prompts.length - 1) {
    promptIndex++;
  }
  else {
    promptIndex = 0;
  }
  console.log(promptIndex);
}

function typeAnswer(callback) {
  const chatBubbleRight = document.createElement("div");
  chatBubbleRight.setAttribute("class", "chat-bubble right tri-right btm-right");
  chatWindow.appendChild(chatBubbleRight);

  typeWriter(answers, answIndex, chatBubbleRight, callback);
  if (answIndex < answers.length - 1) {
    answIndex++;
  }
  else {
    answIndex = 0;
  }
  console.log(answIndex);
}

function typeWriter(currentStrArray, index, currentDiv, callback) {
  if (j < currentStrArray[index].length) {
    // display next character
    currentDiv.innerHTML += currentStrArray[index].charAt(j);
    j++;
    setTimeout(typeWriter, characterDelay, currentStrArray, index, currentDiv, callback);
  } else {
    // move on to next string
    j = 0;
    // execute the callback function once the text is finished typing
    if (callback) {
      callback();
    }
  }
}

function waitThenCall(fn1, fn2, waitAmount) {
  // Call the first function and wait for it to finish executing
  fn1();
  // Wait for the specified amount of time
  setTimeout(function () {
    // Call the second function
    fn2();
  }, waitAmount);
}