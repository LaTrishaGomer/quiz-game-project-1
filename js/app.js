/*------------- Design Credit: slabdsgn via Envato Elements -----------*/
// Commercial License for Figma design file obtained via Envato Elements: https://elements.envato.com/fashion-fashion-landing-page-RCJUDKN

/*------------- Audio Credit: Envato Elements -----------*/
//Commercial License for all sound effects obtained via Envato Elements

/*------------- Photos & Image Assets ------------*/
// I do not own nor claim to own the rights to any images or photos shared in this class project


/*-------------- Constants -------------*/

import { quizQuestions } from "./questions.js";

// const quizQuestions = [
//     {
//         question: "What famous music video is this scene from?",
//         image: "imgs/80s/q1-80s-thriller.jpg",
//         altText: "Screenshot from Thriller music video",
//         options:["Beat It", "Somebody's Watching Me","Thriller", "Ghostbusters"],
//         correctAnswer: 2
//     },
//     {
//         question: "In Back to the Future Part II, what year do Marty, Doc, and Jennifer travel to in the future?",
//         image: "imgs/80s/q2-80s-back2future.jpg",
//         altText: "Screenshot from the movie Back to The Future 2",
//         options:["2025", "2005","2015", "2050"],
//         correctAnswer: 2
//     },
//     {
//         question: "Which school did the girls attend in The Facts of Life?",
//         image: "imgs/80s/q3-80s-facts-of-life.jpg",
//         altText: "Cast of TV show The Facts of Life",
//         options:["Eastland", "Westwood","Hillman", "Northfield"],
//         correctAnswer: 0
//     },
//     {
//         question: "What is the name of this classic computer game?",
//         image: "imgs/80s/q4-80s-oregon-trail.jpg",
//         altText: "Screenshot from the game Oregon Trail",
//         options:["Wagon Rush", "Oregon Trail","Pioneer Quest", "Wild West Adventure"],
//         correctAnswer: 1
//     },
//     {
//         question: "How old was Doogie Howser, M.D. when he became a doctor?",
//         image: "imgs/80s/q5-80s-doogie-howser.jpg",
//         altText: "Screenshot from the show Doogie Howser M.D.",
//         options:["12", "16", "18", "14"],
//         correctAnswer: 3
//     },
//     {
//         question: "What is the name of this popular doll that caused a shopping frenzy in the 80s?",
//         image: "imgs/80s/q6-80s-cabbage-patch-kids.jpg",
//         altText: "Image of the Cabbage Patch Kids Toy",
//         options:["American Girl Dolls", "Cabbage Patch Kids","Beanie Babies", "Raggedy Ann"],
//         correctAnswer: 1
//     },
//     {
//         question: "In what year did The Sally Jessy Raphael Show debut?",
//         image: "imgs/80s/q7-80s-sally-jessy-raphael.jpg",
//         altText: "Photo of talk show host Sally Jessy Raphael",
//         options:["1983", "1989", "1980", "1987"],
//         correctAnswer: 0
//     },
    
//     {
//         question: "Which iconic singer did NOT participate in the song We Are the World?",
//         image: "imgs/80s/q8-80s-we-are-the-world.jpg",
//         altText: "We are the world CD image",
//         options:["Tina Turner", "Bruce Springsteen","Ray Charles", "Elton John"],
//         correctAnswer: 3
//     },
//     {
//         question: "What was the name of the fictional college where A Different World was set?",
//         image: "imgs/80s/q9-80s-different-world.jpg",
//         altText: "Cast of TV show A Different World",
//         options:["Hillman College", "Howard University","Herbert College", "Douglas College"],
//         correctAnswer: 0
//     },

//     {
//         question: "What is the name of this popular Nintendo video game?",
//         image: "imgs/80s/q10-80s-duck-hunt.jpg",
//         altText: "Screenshot of Duck Hunt video game",
//         options:["Duck Tails", "Duck Hunt", "Donald The Duck", "Duck Adventures"],
//         correctAnswer: 1
//     }
// ];


/*---------- Variables (state) ---------*/

let currentQuestion = 0;
let score = 0;


/*----- Cached Element References  -----*/

const questionNumber = document.getElementById("quiz-question-count");
const question = document.getElementById("question");
const quizImg = document.querySelector("#quiz-image img");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const result = document.getElementById("result");
const correctAnswerSound = new Audio("/imgs/right-answer-sound.wav");
const incorrectAnswersound = new Audio("/imgs/wrong-answer-sound.mp3");
const resultSound = new Audio("/imgs/score-result.mp3");


/*-------------- Functions -------------*/

function loadQuestion() {
    const {question: currentQuestionText, options: possibleAnswers, image: imgSrc, altText} = quizQuestions[currentQuestion];
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    question.textContent = currentQuestionText;

    quizImg.src = imgSrc;
    quizImg.alt = altText;

    possibleAnswers.forEach((answer, index) => {
        options[index].textContent = answer;
        options[index].classList.remove("correct", "incorrect");
        options[index].onclick = () => handleAnswerChoice(index);
});

nextButton.disabled = true;
nextButton.style.display = "none";

}

function handleAnswerChoice(selectedIndex) {
    const correctAnswerIndex = quizQuestions[currentQuestion].correctAnswer;
    if (selectedIndex === correctAnswerIndex) {
        options[selectedIndex].classList.add("correct");
        score++;
        correctAnswerSound.volume = .075;
        correctAnswerSound.play();
    } else {
        options[selectedIndex].classList.add("incorrect");
        options[correctAnswerIndex].classList.add("correct");
        incorrectAnswersound.volume = .075;
        incorrectAnswersound.play();
    }
    nextButton.disabled = false;
    nextButton.style.display = "block";
}

function showResult() {
    result.classList.remove("hide");
    result.querySelector("#score").textContent = `${score} out of ${quizQuestions.length}`;
    resultSound.volume = .075;
    resultSound.play();
    nextButton.style.display = "none";
}

/*----------- Event Listeners ----------*/
nextButton.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});



loadQuestion();
