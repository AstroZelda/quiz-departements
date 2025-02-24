let answered = false;
let currentStage = 0;
let score = [];
let currentQuartet = [];
let currentCorrectAnswer;
let getQuartetFunction;
const questionNumber = "À quel département correspond le numéro ";
const questionName = "Quel est le numéro du département ";
const departements = [
  { num: "01", name: "Ain" },
  { num: "02", name: "Aisne" },
  { num: "03", name: "Allier" },
  { num: "04", name: "Alpes-de-Haute-Provence" },
  { num: "05", name: "Hautes-Alpes" },
  { num: "06", name: "Alpes-Maritimes" },
  { num: "07", name: "Ardèche" },
  { num: "08", name: "Ardennes" },
  { num: "09", name: "Ariège" },
  { num: "10", name: "Aube" },
  { num: "11", name: "Aude" },
  { num: "12", name: "Aveyron" },
  { num: "13", name: "Bouches-du-Rhône" },
  { num: "14", name: "Calvados" },
  { num: "15", name: "Cantal" },
  { num: "16", name: "Charente" },
  { num: "17", name: "Charente-Maritime" },
  { num: "18", name: "Cher" },
  { num: "19", name: "Corrèze" },
  { num: "2A", name: "Corse-du-Sud" },
  { num: "2B", name: "Haute-Corse" },
  { num: "21", name: "Côte-d'Or" },
  { num: "22", name: "Côtes-d'Armor" },
  { num: "23", name: "Creuse" },
  { num: "24", name: "Dordogne" },
  { num: "25", name: "Doubs" },
  { num: "26", name: "Drôme" },
  { num: "27", name: "Eure" },
  { num: "28", name: "Eure-et-Loir" },
  { num: "29", name: "Finistère" },
  { num: "30", name: "Gard" },
  { num: "31", name: "Haute-Garonne" },
  { num: "32", name: "Gers" },
  { num: "33", name: "Gironde" },
  { num: "34", name: "Hérault" },
  { num: "35", name: "Ille-et-Vilaine" },
  { num: "36", name: "Indre" },
  { num: "37", name: "Indre-et-Loire" },
  { num: "38", name: "Isère" },
  { num: "39", name: "Jura" },
  { num: "40", name: "Landes" },
  { num: "41", name: "Loir-et-Cher" },
  { num: "42", name: "Loire" },
  { num: "43", name: "Haute-Loire" },
  { num: "44", name: "Loire-Atlantique" },
  { num: "45", name: "Loiret" },
  { num: "46", name: "Lot" },
  { num: "47", name: "Lot-et-Garonne" },
  { num: "48", name: "Lozère" },
  { num: "49", name: "Maine-et-Loire" },
  { num: "50", name: "Manche" },
  { num: "51", name: "Marne" },
  { num: "52", name: "Haute-Marne" },
  { num: "53", name: "Mayenne" },
  { num: "54", name: "Meurthe-et-Moselle" },
  { num: "55", name: "Meuse" },
  { num: "56", name: "Morbihan" },
  { num: "57", name: "Moselle" },
  { num: "58", name: "Nièvre" },
  { num: "59", name: "Nord" },
  { num: "60", name: "Oise" },
  { num: "61", name: "Orne" },
  { num: "62", name: "Pas-de-Calais" },
  { num: "63", name: "Puy-de-Dôme" },
  { num: "64", name: "Pyrénées-Atlantiques" },
  { num: "65", name: "Hautes-Pyrénées" },
  { num: "66", name: "Pyrénées-Orientales" },
  { num: "67", name: "Bas-Rhin" },
  { num: "68", name: "Haut-Rhin" },
  { num: "69", name: "Rhône" },
  { num: "70", name: "Haute-Saône" },
  { num: "71", name: "Saône-et-Loire" },
  { num: "72", name: "Sarthe" },
  { num: "73", name: "Savoie" },
  { num: "74", name: "Haute-Savoie" },
  { num: "75", name: "Paris" },
  { num: "76", name: "Seine-Maritime" },
  { num: "77", name: "Seine-et-Marne" },
  { num: "78", name: "Yvelines" },
  { num: "79", name: "Deux-Sèvres" },
  { num: "80", name: "Somme" },
  { num: "81", name: "Tarn" },
  { num: "82", name: "Tarn-et-Garonne" },
  { num: "83", name: "Var" },
  { num: "84", name: "Vaucluse" },
  { num: "85", name: "Vendée" },
  { num: "86", name: "Vienne" },
  { num: "87", name: "Haute-Vienne" },
  { num: "88", name: "Vosges" },
  { num: "89", name: "Yonne" },
  { num: "90", name: "Territoire de Belfort" },
  { num: "91", name: "Essonne" },
  { num: "92", name: "Hauts-de-Seine" },
  { num: "93", name: "Seine-Saint-Denis" },
  { num: "94", name: "Val-de-Marne" },
  { num: "95", name: "Val-d'Oise" },
  { num: "971", name: "Guadeloupe" },
  { num: "972", name: "Martinique" },
  { num: "973", name: "Guyane" },
  { num: "974", name: "La Réunion" },
  { num: "975", name: "Saint-Pierre-et-Miquelon" },
  { num: "976", name: "Mayotte" },
  { num: "2A", name: "Corse-du-Sud" },
  { num: "2B", name: "Haute-Corse" },
];

function init() {
  answered = false;
  currentStage = 0;
  score = [];
  show("game");
  nextQuestion();
}

function easyMode(source) {
  hide(source);
  getQuartetFunction = getQuartetFromArray;
  init();
}

function hardMode(source) {
  hide(source);
  getQuartetFunction = getNeighboringQuartetFromArray;
  init();
}

function hide(id) {
  document.getElementById(id).classList.add("hidden");
}

function show(id) {
  document.getElementById(id).classList.remove("hidden");
}

function answer(index) {
  if (!answered) {
    answered = true;
    disableSelection();
    fillAnswersFull();

    getCorrectAnswer().classList.add("true");

    if (currentCorrectAnswer === index) {
      updateScore(true);
    } else {
      updateScore(false);
      getSelectedAnswer(index).classList.add("false");
    }

    enableNextButton();
  }
}

function disableSelection() {
  const answers = document.getElementById("reponses");
  answers.classList.remove("selectable");
}

function enableSelection() {
  const answers = document.getElementById("reponses");
  answers.classList.add("selectable");
}

function getCorrectAnswer() {
  return document.getElementById("rep" + currentCorrectAnswer);
}

function getSelectedAnswer(index) {
  return document.getElementById("rep" + index);
}

function updateScore(value) {
  score.push(value);

  const currentScore = document.getElementById("point" + currentStage);
  currentScore.classList.remove("current");
  currentScore.classList.add(value);

  currentStage++;
}

function enableNextButton() {
  document.getElementById("bouton").classList.remove("disabled");
}

function disableNextButton() {
  document.getElementById("bouton").classList.add("disabled");
}

function next() {
  if (!!answered) {
    nextQuestion();
  }
}

function nextQuestion() {
  if (currentStage === 10) {
    hide("game");
    show("result");
    resetScore();
  } else {
    disableNextButton();
    clearAnswerClasses();
    document.getElementById("point" + currentStage).classList.add("current");
    setQuestionAnswers();
    answered = false;
  }
}

function clearAnswerClasses() {
  Array(...document.getElementsByClassName("reponse")).forEach((element) => {
    element.classList.remove("true");
    element.classList.remove("false");
  });

  enableSelection();
}

function setQuestionAnswers() {
  currentQuartet = getQuartetFunction();
  currentCorrectAnswer = Math.floor(Math.random() * 4) + 1;

  if (currentStage % 2 === 0) {
    // question numéro -> dep
    setQuestion(
      questionNumber +
        "<u>" +
        currentQuartet[currentCorrectAnswer - 1]["num"] +
        "</u> ?"
    );
    setReponsesNames(currentQuartet);
  } else {
    // question dep -> numéro
    setQuestion(
      questionName +
        "<u>" +
        currentQuartet[currentCorrectAnswer - 1]["name"] +
        "</u> ?"
    );
    setReponsesNumbers(currentQuartet);
  }
}

function setQuestion(text) {
  document.getElementById("question").innerHTML = text;
}

function setReponsesNames(reponses) {
  reponses.forEach((e, index) => {
    document.getElementById("rep" + (index + 1)).innerText = e["name"];
  });
}

function setReponsesNumbers(reponses) {
  reponses.forEach((e, index) => {
    document.getElementById("rep" + (index + 1)).innerText = e["num"];
  });
}

function getQuartetFromArray() {
  return [...departements].sort(() => Math.random() - 0.5).slice(0, 4);
}

function getNeighboringQuartetFromArray() {
  let startIndex = Math.floor(Math.random() * (departements.length - 3));
  return departements.slice(startIndex, startIndex + 4);
}

function resetScore() {
  for (let i = 0; i <= 9; i++) {
    document.getElementById("point" + i).className = "";
  }
}

function fillAnswersFull() {
  currentQuartet.forEach((e, index) => {
    document.getElementById("rep" + (index + 1)).innerText =
      e["name"] + " (" + e["num"] + ")";
  });
}
