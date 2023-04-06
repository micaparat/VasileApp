let prompts = [

  "Ce să gătesc azi? Vine barbată-miu din delegaţie şi vreau să-l surprind",
  "Ce sa gătesc azi la ăia micii?",
  "Am tot facut ciorbă de leuştean, nu ştiu ce să gătesc azi",
  "Ce să mai gătesc azi?",
  "Dar dacă ne invadează ruşii, eu ce le pun pe masă?",
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
  "Am cîştigat un milion la păcănele. Cu ce pot să-mi răsfăţ familia?",
  "Au intrat în sfîrşit ăia 50 de lei de la Soroş. Ce să gătesc azi?",
  "M-am umplut de patriotism. Ce pot să gătesc tradiţional, autentic, românesc?",
  "Ce să fac de mîncare să îmi iau şi eu dimineaţa la serviciu?",
  "Ce să fac de mîncare să mă ţină o săptămînă, pînă la salariu?",
  "Ce să fac de mîncare pe inflaţia asta?",
  "Ce-mi recomanzi să gătesc?",
  "Particip la Master Chefi La Cuţite Au Talent. Cu ce să-l impresionez pe chef Scărpălescu?",
  "Ce să gătesc să duc şi eu la ziua Lenuţei ca să nu mai sparg banii la cofetărie?",
  "Vin în vizită verişorii mei din Tuvalu. Ce să gătesc ca să-i dau pe spate?",
  "Ce să gătesc mai sănătos? Mi-au ieşit analizele varză",
  "Ce să gătesc să-mi dea energie? Am de crăpat două tone de lemne diseară",
  "E inflaţie. Ce să gătesc care să fie şi gustos, şi ieftin?",
  "Fi-miu stă la cămin. Ce să gătesc să-i pun pe autocar la noapte?",
  "Ce să gătesc care să mulţumească şi milenialii, şi generaţia Z?",
  "Am în frigider doar lapte de soia bio şi o banană. Ce aş putea să gătesc?",
  "Mi-am consumat inspiraţia scriind un roman fantasy de 9000 de pagini. Ce să gătesc azi?",
  "Mi-e foame şi nu prea. Ce să gătesc azi mai lejer?",
  "Trebuie să slăbesc ca să încap în costumul de Scooby Doo la serbare. Ce să gătesc azi?",
  "Cîntă Scorpions la Zilele Oraşului şi m-am oferit să-i cazez peste noapte. Ce să le gătesc?",
  "Azi sărbătorim că a intrat copilul la Medicină. Ce să gătesc?",
  "Mi-a rămas o coadă de miel de la Paşti. Ce pot să gătesc cu ea?",
  "A zis la RTV că neomarxiştii vor să interzică mîncarea. Ce să gătesc şi eu repede?"
  


]; // array of prompts to display

let answers = [

  "Spaghetti con ketchupe. Meraviglioso!",
  "Ciorbiţă de văcuţă cu smîntînică, ardeiaş iuţişor şi cepuţă",
  "Fă o piftie cu alea 14 picioare de porc din congelator",
  "Broccoli de soia, o delicioasă alternativă ŞI MAI vegetală la broccoli",
  "Fă nişte legume pane în stil japonez, aruncă-le pe masă şi urlă: mănîncă tempura mea!",
  "Cică a aprobat UE insectele pentru consum uman. Scoate papucul, e ziua recoltei",
  "Am auzit că îţi place să traduci meme vechi. Fă nişte şunci aburite",
  "Supă cremă de ciorbă",
  "Perişoare de homar",
  "Gulie pe băţ",
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
  "Falafel din fasole, cunoscut şi ca pîrţ-joale moldoveneşti",
  "Fantezie cu rahat",
  "Sandviş cu pîine",
  "Înfige-i calului un crenvurşt în frunte. Vei obţine un animal mitologic, hotdorogul",
  "Come si dice... pane con salame",
  "Salată de boeuf, dar cu pui, dar îi zici tot de boeuf pentru că salată de poule sună într-un fel",
  "APĂI NO, pită cu unsoare, tulai daomne",
  "Cartofi. Sau, cum le zice în Moldova, tarantule",
  "She hit the floor / Next thing you know / Fă un şalău, lău, lău, lău",
  "Înfige un cîrnat în bormaşină şi invită-ţi toţi vecinii la un CaltaBosch",
  "Puţin rafinament ân plm. Fă şi tu un Boeuf borgunguingnon sau cum kkt se scrie",
  "Coaie pe Zacuscă nu e doar o trupă de Rahovian Black Metal, ci şi ceva ce NU ar trebui să găteşti niciodată",
  "O friptură de exact 666 de grame, în sînge, pentru stăpînul nostru întunecat",
  "Ca AI, nu am un stomac fizic, aşa că dacă aş avea cur, m-ar durea în cur ce găteşti tu azi",
  "01101101 01101001 01100011 01101001 la grătar. Mmm, mmm!",
  "Ştii bancul cu staţia? Staţiar în gît",
  "Să vedem ce ai în cămară. Ai nişte gutui, nişte banane dar mere pula!",
  "Sunt antrenat doar cu informaţii din anul 1986, aşa că probabil ai de ales între gheare şi spinări",
  "Dacă ai un iPhone mai nou de 2016, poţi să-l schimbi pe OLX cu un porc şi mai departe te descurci",
  "Supă ţărănească de cub Knorr cu Vegeta şi Delikat",
  "Să îl întrebăm mai bine pe Nistor McDristor, şaormarul prietenos",
  "Ceau, fă şi tu ceva care să alunece aşa, păstă medie",
  "Maioneză cu untură. Mai târziu, când mănânci doar maioneză, corpului tău o să i se pară că ţine regim",
  "Eu ţi-am zis să iei pui, dar tu nu, Batman, Batman. Acum fă aripioare de Batman",
  "Paletă de ping pong pane. Conţine fibre",
  "Ce sens are să mai faci de mîncare cînd îţi poţi uploada creierul în Spotiflix pentru doar 3 dolari pe lună",
  "Tartă cu prune. Dacă n-ai prune, cireşe. Dacă n-ai cireşe, vişine",
  "Mămăligă cu brânză şi [Abonează-te pentru a avea acces la acest ingredient]",
  "Cool-ivă. Ca coliva, dar cool",
  "Salată de alge. Pentru un plus de savoare, pune şi şnurul de la slip",
  "Smoothie de grepfrut, varză kale şi mici",
  "Aroane cu brânză. Iniţial se numeau macaroane dar am avut probleme cu McDonald's",
  "Ceai de roboţica-cucului. Face bine la circuite",
  "Ca AI, am fost programat să înţeleg perfect emoţiile umane. Taie nişte ceapă. Râsul e sănătos",
  "Ştiu de la Neti Sandu o reţetă excelentă de berbec cu raci",
  "Melci. Scoate-i din cochilie. Eww, limacşi, ce scîrbos. Bagă-i la loc în cochilie. Iar melci",
  "Fă un ou fiert tare şi spune-i: eşti tare, oule fiert. Toţi merităm un compliment",
  "Feliază un morcov. Foloseşte feliile ca să-ţi iei chipsuri din automat",
  "OK Google, dă-mi o reţetă. RE-ŢETĂ. Nu, nu vreau să ascult formaţia belgiană de post-punk Red Zebra",
  "Spartul seminţelor în faţa blocului e şi el o formă rudimentară de gătit",
  "Cînd te gîndeşti că îmi oferise Ion un post la guvern",
  "N-avem timp de gătit, Morty. Galaxia e în pericol!",
  "Să-ţi zic un banc? Sigur. Care e sistemul de operare preferat al veveriţelor? Ghindows",
  "Pastramă de proteină hidrolizată de soia, ca la stînă în Munţii Rodnei",
  "Şorici din tofu, cunoscut şi ca tofurici",
  "Cel mai înalt munte din Dobrogea, Vf. Ţuţuiatu, reprodus în întregime din pilaf",
  "Fă o ciorbă acră cu praf de ardei iute. Borsche Cayenne",
  "Fă o sarma în frunză de viţă şi una în foaie de varză şi pune-le să se bată",
  "Clonează un mamut. Probabil e mai ieftin decât ceafa de porc",
  "Chipsuri 5G de porumb, cunoscute şi ca vaccinachos",
  "Un dressing de salată care combate încălzirea globală. Vinegreta Thunberg",
  "Fupuleţi. Ca pufuleţii, dar invers",
  "Tătăligă. Masculul mămăligii",
  "Ceafă de borg. Merge cu nişte klingogonele",
  "Algoritmul de recunoaştere facială îmi spune că eşti un cal. Îţi recomand ovăz"
  


]; // array of answers to display

const randomizedPrompts = shuffleArray(prompts);
const randomizedAnswers = shuffleArray(answers);

let promptIndex = Math.floor(Math.random() * randomizedPrompts.length);  // index of current prompt string
let answIndex = Math.floor(Math.random() * randomizedAnswers.length); // index of current answer string
let j = 0; // index of current character in answer string
let characterIndex = 0;
let submitButton = document.getElementById("cgpt-submit-button");
let chatWindow = document.getElementById("cgpt-chat-window");
let flashinPoeinis = document.getElementById("cgpt-flashing-poeinis");
let currentStrArray;
let currentStrIndex;
var thinkingSPinner = document.getElementById("thinking");

thinkingSPinner.style.display = "none";
flashinPoeinis.style.display = "none";

var minThinking = 200; //milliseconds
var maxThinking = 3000; //milliseconds

const characterDelay = 25; // characterDelay in milliseconds between each character
const answerDelay = Math.floor(Math.random() * (maxThinking - minThinking + 1)) + minThinking; // characterDelay in milliseconds between question/answer

let divID = 0;

function resetRenderPrompt() {
  // reset input field and chat window
  chatWindow.innerHTML = "";
  submitButton.disabled = true;

  typeQuestion(() => {
    thinkingSPinner.style.display = "block";
    setTimeout(() => {
      thinkingSPinner.style.display = "none";
      flashinPoeinis.style.display = "block";
      typeAnswer(() => {
        submitButton.disabled = false;
        flashinPoeinis.style.display = "none";
      });
    }, answerDelay); // wait for X milliseconds between the two functions
  });
}

function typeQuestion(callback) {
  const chatBubbleLeft = document.createElement("div");
  chatBubbleLeft.setAttribute("class", "cgpt-chat-bubble cgpt-left cgpt-tri-right cgpt-btm-left");
  chatWindow.appendChild(chatBubbleLeft);

  typeWriter(randomizedPrompts, promptIndex, chatBubbleLeft, callback);
  if (promptIndex < randomizedPrompts.length - 1) {
    promptIndex++;
  }
  else {
    promptIndex = 0;
  }
}

function typeAnswer(callback) {
  const chatBubbleRight = document.createElement("div");
  chatBubbleRight.setAttribute("class", "cgpt-chat-bubble cgpt-right cgpt-tri-right cgpt-btm-right");
  chatWindow.appendChild(chatBubbleRight);

  typeWriter(randomizedAnswers, answIndex, chatBubbleRight, callback);
  if (answIndex < randomizedAnswers.length - 1) {
    answIndex++;
  }
  else {
    answIndex = 0;
  }
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
