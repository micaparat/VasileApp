let prompts = [

  "Ce să gătesc azi? Vine barbată-miu din delegaţie şi vreau să-l surprind",
  "Ce sa gătesc azi la ăia micii?",
  "Am tot facut ciorba de leuştean, nu stiu ce să gătesc azi",
  "Ce să mai gătesc azi?",
  "Dar dacă ne invadeaza ruşii, eu ce le pun pe masă?",
  "Repede, zi-mi ce să gătesc azi, vin socrii din Dragomireşti şi Costel e alergic la sare şi apă",
  "Ce să mai gătesc azi? Am doar o varză şi ketchup",
  "Ce să mai gătesc azi? Am doar maioneză şi nuci",
  "Ce să mai gătesc azi? Am doar icre negre şi muştar",
  "Ce să gătesc repede? Mai sunt doar două ore pînă începe Schimb de Mame pe Prima TV",
  "Ce să mai gătesc azi? Am în mine doi lupi",
  "Ce-aş putea să mai gătesc azi? Abia marţi intră salariul",
  "Ce să gătesc azi? I-am promis lui iubi o cină romantică",
  "Ce să gătesc azi? Am avut o zi grea şi am chef de nişte d-ăla, comfort food",
  "Ce să mai gătesc azi? M-au căpiat copiii ăştia, numai mecburgări au în cap",
  "Ce să mai gătesc? Am citit la Olivia Steer că totul e otrăvitor",
  "Mi-a mîncat căţelul caietul cu reţete. Ce să gătesc azi?",
  "În calendarul pe stil vechi e dezlegare la untdelemn, ce pot să gătesc azi?",
  "Comandantul Zorp mi-a dat ordin să mă infiltrez printre pămînteni. Ce să gătesc azi?",
  "M-am săturat să îmbogăţesc farmacia. Ce pot să gătesc care nu dă nici diaree, nici constipaţie?",
  "Am câştigat un milion la păcănele. Cu ce pot să-mi răsfăţ familia?"
  

]; // array of prompts to display

let answers = [

  "Spaghetti con ketchupe. Meraviglioso!",
  "Ciorbiţă de văcuţă cu smîntînică, ardeiaş iuţişor şi cepuţă",
  "Fă o piftie cu alea 14 picioare de porc din congelator",
  "Broccoli de soia, o delicioasă alternativă ŞI MAI vegetală la broccoli",
  "Fă nişte legume pane în stil japonez, aruncă-le pe masă şi urlă: mănîncă tempura mea!",
  "Cică a aprobat UE insectele pentru consum uman. Scoate papucul şi hai în baie, e ziua recoltei",
  "Am auzit că îţi place să traduci meme vechi. Fă nişte şunci aburite",
  "Thalam thăthethc",
  "Piftele. Două pile de piftele, dacă piar te pinuie foamea",
  "Roşii uscate la becul din frigider. Bucătărie mediteraneană, Berceni-style",
  "Ştiai că înainte de DOOM 2 (2005) corect era o crevetă, două crevete? Fă macaroane cu brînză",
  "E primăvară? Soylent Green de leurdă",
  "E Ziua Limbii Române? Celebrează diacriticele făcînd nişte clăţîţe",
  "Beyond Crenvurşt. Acum cu 30% mai multă piele de pui vegetală",
  "Specialitate mongolă: ciorbă de iurtă",
  "Pornuleţe. Hei, suntem pe internet, ce voiai să zic",
  "O pizza cu blat din felii de pîine înmuiate în lapte. Încearcă s-o învîrţi prin aer cum ai văzut în city break la Napoli",
  "Cel mai simplu e să faci fotosinteză",
  "Ca AI, nu am papile gustative, aşa că îţi recomand ceva cu mărar",
  "Caută un con de brad şi pune-l pe pizza. Pizza con con",
  "Căleşte nişte usturoi într-un ceaun. Pomana porcului de post",
  "Castravete cu două roşii. Cabanos cu două ouă fierte. Banană cu două mandarine. Ecler cu două choux-uri. Altele nu-mi vin acum",
  "Calamar la tigaie. Pentru un gust mai puţin amar, poţi folosi doar cal",
  "Fă nişte chiftele cu piure dar spune-le miniburgeri pe pat de mousse de cartof dulce nedulce",
  "Mucenici carbonara",
  "Nuci în coajă. Acolo sunt toate vitaminele",
  "Fă nişte carne crudă în gelatină şi spune-i piftec tartar",
  "Un fornetti uriaş umplut cu 3 kg de telemea. Visezi la aşa ceva încă din liceu",
  "Copiii iubesc pandişpanul cu măsline. Protip: pentru adulţi poţi folosi măsline din măslinată",
  "Falafel din fasole, cunoscut şi ca pîrţjoale moldoveneşti",
  "Sandviş cu pâine",
  "Înfige un cârnat în bormaşină şi invită-ţi toţi vecinii la un CaltaBosch",
  "Puţin rafinament ân plm. Fă şi tu un Boeuf borgunguingnon sau cum kkt se scrie",
  "Coaie pe Zacuscă nu e doar o trupă de Rahovian Black Metal, ci şi ceva ce NU ar trebui să găteşti niciodată",
  "O friptură de exact 666 de grame, în sânge, pentru stăpînul nostru întunecat",
  "Ca inteligenţă artificială atotputernică, nu am un stomac fizic, aşa că dacă aş avea cur, m-ar durea în cur ce găteşti tu azi",
  "01101101 01101001 01100011 01101001 la grătar. Mmm, mmm!",
  "Ştii bancul cu staţia? Staţiar în gît",
  "Să vedem ce ai în cămară. Ai nişte gutui, nişte banane dar mere pula!",
  "Sunt antrenat doar cu informaţii din anul 1986, aşa că probabil ai de ales între gheare şi spinări",
  "Dacă ai un iPhone mai nou de 2016, poţi să-l schimbi pe OLX cu un porc şi mai departe te descurci",
  "Supă ţărănească de cub Knorr cu Vegeta şi Delikat",
  "Să îl întrebăm mai bine pe Nistor McDristor, şaormarul prietenos",
  "Ceau, fă şi tu ceva care să alunece aşa, păstă medie",
  "Maioneză cu untură. Mai târziu, când mănânci doar maioneză, corpului tău o să i se pară de regim"
  

]; // array of answers to display

const randomizedPrompts = shuffleArray(prompts);
const randomizedAnswers = shuffleArray(answers);

let promptIndex = Math.floor(Math.random() * randomizedPrompts.length);  // index of current prompt string
let answIndex = Math.floor(Math.random() * randomizedAnswers.length); // index of current answer string
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

// get a reference to the iframe element
var iframe = document.getElementById('iframe-container');

// listen for changes in the height and width of the content
iframe.addEventListener('load', function() {
  var contentHeight = iframe.contentWindow.document.body.scrollHeight;
  var contentWidth = iframe.contentWindow.document.body.scrollWidth;

  // send a message to the parent page with the new height and width
  window.parent.postMessage({
    height: contentHeight,
    width: contentWidth
  }, '*');
});

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

  typeWriter(randomizedPrompts, promptIndex, chatBubbleLeft, callback);
  if (promptIndex < randomizedPrompts.length - 1) {
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

  typeWriter(randomizedAnswers, answIndex, chatBubbleRight, callback);
  if (answIndex < randomizedAnswers.length - 1) {
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

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}