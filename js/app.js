/*------------- Design Credit: slabdsgn -----------*/
// Commercial License for Figma design file obtained via Envato Elements: https://elements.envato.com/fashion-fashion-landing-page-RCJUDKN

/*------------- Photos & Image Assets ------------*/
// I do not own nor claim to own the rights to any images or photos shared in this class project


/*-------------- Constants -------------*/

const quizQuestions = [
    {
        question: "What was the name of the fictional HBCU where A Different World was set?",
        image: "imgs/q1-80s-different-world.jpg",
        options:["Hillman College", "Howard University","Herbert College", "Douglas College"],
        correctAnswer: 0
    },

    {
        question: "What is the name of this popular Nintendo video game?",
        image: "imgs/q2-80s-duck-hunt.jpg",
        options:["Duck Tails", "Duck Hunt", "Donald The Duck", "Duck Adventures"],
        correctAnswer: 1
    }
];


/*---------- Variables (state) ---------*/

let currentQuestion = 0;
let score = 0;


/*----- Cached Element References  -----*/

const category = document.getElementById("category");
const questionNumber = document.getElementById("quiz-question-count");
const question = document.getElementById("question");
const quizImg = document.querySelector("#quiz-image img");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const result = document.getElementById("result");

/*-------------- Functions -------------*/

function loadQuestion() {
    const {question: currentQuestionText, options: possibleAnswers, image: imgSrc} = quizQuestions[currentQuestion];
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    question.textContent = currentQuestionText;

    quizImg.src = imgSrc;

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
    } else {
        options[selectedIndex].classList.add("incorrect");
        options[correctAnswerIndex].classList.add("correct");
    }
    nextButton.disabled = false;
    nextButton.style.display = "block";
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

