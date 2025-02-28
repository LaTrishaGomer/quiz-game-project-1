/*------------- Design Credit: slabdsgn via Envato Elements -----------*/
// Commercial License for Figma design file obtained via Envato Elements: https://elements.envato.com/fashion-fashion-landing-page-RCJUDKN

/*------------- Audio Credit: Envato Elements -----------*/
//Commercial License for all sound effects obtained via Envato Elements

/*------------- Photos & Image Assets ------------*/
// I do not own nor claim to own the rights to any images or photos shared in this class project


/*-------------- Constants -------------*/

import { quizQuestions80s, quizQuestions90s, quizQuestionsY2K } from "./questions.js";


/*---------- Variables (state) ---------*/

let currentQuestion = 0;
let score = 0;
let quizQuestions = [];


/*----- Cached Element References  -----*/


const questionCounter = document.getElementById("quiz-question-count");
const question = document.getElementById("question");
const quizImg = document.querySelector("#quiz-image img");
const choices = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const result = document.getElementById("result");

const correctAnswerSound = new Audio("assets/audio/right-answer-sound.mp3");
const incorrectAnswerSound = new Audio("assets/audio/wrong-answer-sound.mp3");
const resultSound = new Audio("assets/audio/score-result.mp3");


/*-------------- Functions -------------*/

window.startQuiz = function (category) {
    localStorage.setItem("selectedCategory", category);
    window.location.href = "quizone.html";
};

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("quizone.html")) {
        const category = localStorage.getItem("selectedCategory");

        if (!category) return;

        if (category === "80s") {
            quizQuestions = quizQuestions80s;
        } else if (category === "90s") {
            quizQuestions = quizQuestions90s;
        } else if (category === "Y2K") {
            quizQuestions = quizQuestionsY2K;
        }

        const categoryTitle = document.getElementById("category");
        if (categoryTitle) {
            categoryTitle.textContent = `Category: ${category}`;
        }

        askTrivia();
    }
});


function askTrivia() {
    const {question: currentQuestionText, options: possibleAnswers, image: imgSrc, altText} = quizQuestions[currentQuestion];
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    question.textContent = currentQuestionText;

    quizImg.src = imgSrc;
    quizImg.alt = altText;

    possibleAnswers.forEach((answer, index) => {
        choices[index].textContent = answer;
        choices[index].classList.remove("correct", "incorrect");
        choices[index].onclick = () => handleAnswerChoice(index);
});

nextButton.disabled = true;
nextButton.style.display = "none";

}

function handleAnswerChoice(selectedIndex) {
    const correctAnswerIndex = quizQuestions[currentQuestion].correctAnswer;
    if (selectedIndex === correctAnswerIndex) {
        choices[selectedIndex].classList.add("correct");
        score++;
        correctAnswerSound.volume = 1.0;
        correctAnswerSound.play();
    } else {
        choices[selectedIndex].classList.add("incorrect");
        choices[correctAnswerIndex].classList.add("correct");
        incorrectAnswerSound.volume = 1.0;
        incorrectAnswerSound.play();
    }
    nextButton.disabled = false;
    nextButton.style.display = "block";
}

function showResult() {
    result.classList.remove("hide");
    result.querySelector("#score").textContent = `${score} out of ${quizQuestions.length}`;
    resultSound.volume = 1.0;
    resultSound.play();
    nextButton.style.display = "none";
}

/*----------- Event Listeners ----------*/
document.addEventListener("DOMContentLoaded", () => {
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            currentQuestion++;
            if(currentQuestion < quizQuestions.length) {
                askTrivia();
            } else {
                showResult();
            }
        });
    }
});
