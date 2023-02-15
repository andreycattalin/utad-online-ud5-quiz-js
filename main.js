let allQuestions = [
  {
    title: "¿Qué etiqueta de HTML se utiliza para crear una lista ordenada?",
    answers: [
      {
        title: "ol",
        isCorrect: true,
      },
      {
        title: "ul",
        isCorrect: false,
      },
      {
        title: "li",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Qué atributo se utiliza para establecer un hipervínculo en HTML?",
    answers: [
      {
        title: "href",
        isCorrect: true,
      },
      {
        title: "src",
        isCorrect: false,
      },
      {
        title: "alt",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Cuál es la propiedad CSS utilizada para establecer el color de fondo de un elemento?",
    answers: [
      {
        title: "color",
        isCorrect: false,
      },
      {
        title: "background-color",
        isCorrect: true,
      },
      {
        title: "font-size",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Cuál es la etiqueta de HTML utilizada para crear un botón?",
    answers: [
      {
        title: "button",
        isCorrect: true,
      },
      {
        title: "form",
        isCorrect: false,
      },
      {
        title: "input",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Qué propiedad de CSS se utiliza para establecer el tamaño de fuente de un elemento?",
    answers: [
      {
        title: "font-size",
        isCorrect: true,
      },
      {
        title: "color",
        isCorrect: false,
      },
      {
        title: "background-color",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Qué significa CSS?",
    answers: [
      {
        title: "Cascading Style Sheets",
        isCorrect: true,
      },
      {
        title: "Cascading Script Styles",
        isCorrect: false,
      },
      {
        title: "Creative Style Sheets",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Qué significa HTML?",
    answers: [
      {
        title: "Hyper Text Markup Language",
        isCorrect: true,
      },
      {
        title: "High-level Text Manipulation Language",
        isCorrect: false,
      },
      {
        title: "Hyperlink Text Modulation Language",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Cuál es la etiqueta de HTML utilizada para agregar una imagen?",
    answers: [
      {
        title: "img",
        isCorrect: true,
      },
      {
        title: "image",
        isCorrect: false,
      },
      {
        title: "picture",
        isCorrect: false,
      },
    ],
  },
  {
    title: "¿Cuál es la etiqueta de HTML utilizada para crear un enlace a una hoja de estilo CSS externa?",
    answers: [
      {
        title: "link",
        isCorrect: true,
      },
      {
        title: "style",
        isCorrect: false,
      },
      {
        title: "css",
        isCorrect: false,
      },
    ],
  },
];

let posActual = 0;
let points = 0;

function loadData() {
  document.getElementById("qPos").innerHTML = "Pregunta " + (posActual + 1) + " de " + allQuestions.length;

  document.getElementById("question-box").innerHTML = allQuestions[posActual].title;

  let contentAnswer = "";
  allQuestions[posActual].answers.forEach((answer, index) => {
    contentAnswer += `<button id="btn-${index}" onclick="checkAnswer(${index})" class="hover:bg-slate-400 w-full bg-slate-200 p-2 rounded">${answer.title}</button>`;
  });

  document.getElementById("answers-box").innerHTML = contentAnswer;
}

function checkAnswer(index) {
  let idBtn = "btn-" + index;

  if (allQuestions[posActual].answers[index].isCorrect) {
    document.getElementById(idBtn).classList.remove("bg-slate-200");
    document.getElementById(idBtn).classList.add("bg-green-500");
    points += 1;
  } else {
    points -= 1;
    document.getElementById(idBtn).classList.remove("bg-slate-200");
    document.getElementById(idBtn).classList.add("bg-red-500");
  }
}

function next() {
  posActual++;

  if (posActual == allQuestions.length) {
    document.getElementById("quiz").classList.toggle("hidden");
    document.getElementById("finished").classList.toggle("hidden");
    document.getElementById("points").innerHTML = "Has conseguido " + points + " puntos";
    return;
  }

  loadData();
}

loadData();
