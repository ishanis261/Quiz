const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Makeup Language",
            "Hyper Text Markup Language",
            "Hyper Tool Markup Language",
            "High Text Markup Language"
        ],
        correct: 1
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        correct: 1
    },
    {
    question: "Which planet is known as the Red Planet?",
    answers: [
        "Earth",
        "Mars",
        "Venus",
        "Jupiter"
    ],
    correct: 1
},
{
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain"
    ],
    correct: 1
},
{
    question: "What is the capital of Australia?",
    answers: [
        "Sydney",
        "Melbourne",
        "Canberra",
        "Perth"
    ],
    correct: 2
},
{
    question: "Which is the largest ocean on Earth?",
    answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
    ],
    correct: 2
},
{
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Hydrogen"
    ],
    correct: 2
},
{
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
        "China",
        "South Korea",
        "Japan",
        "Thailand"
    ],
    correct: 2
},
{
    question: "How many continents are there on Earth?",
    answers: [
        "5",
        "6",
        "7",
        "8"
    ],
    correct: 2
},
{
    question: "Which is the fastest land animal?",
    answers: [
        "Lion",
        "Cheetah",
        "Tiger",
        "Leopard"
    ],
    correct: 1
},
{
    question: "Who painted the Mona Lisa?",
    answers: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Michelangelo"
    ],
    correct: 2
},
{
    question: "Which is the longest river in the world?",
    answers: [
        "Amazon River",
        "Nile River",
        "Yangtze River",
        "Mississippi River"
    ],
    correct: 1
},
];
let currentQuestionIndex = 0;
let score = 0;
// Start Quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");

    currentQuestionIndex = 0;
    score = 0;

    showQuestion();
}

// Display Question
function showQuestion() {
    nextBtn.classList.add("hide");
    answerButtons.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answerButtons.appendChild(button);
    });
}

// Check Answer
function selectAnswer(selectedIndex) {

    const currentQuestion = questions[currentQuestionIndex];

    const buttons = answerButtons.children;

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].disabled = true;

        if (i === currentQuestion.correct) {
            buttons[i].classList.add("correct");
        }

        if (i === selectedIndex && i !== currentQuestion.correct) {
            buttons[i].classList.add("wrong");
        }
    }

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    nextBtn.classList.remove("hide");
}

// Next Button
nextBtn.addEventListener("click", () => {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }

});

// Show Result
function showResult() {

    quizScreen.classList.add("hide");

    resultScreen.classList.remove("hide");

    scoreElement.innerText = score + " / " + questions.length;
}

// Restart Quiz
restartBtn.addEventListener("click", () => {

    resultScreen.classList.add("hide");

    startScreen.classList.remove("hide");

});