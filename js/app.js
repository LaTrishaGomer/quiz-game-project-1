/*-------------------------------- Design Credit: slabdsgn --------------------------------*/
// Commercial License for Figma design file obtained via Envato Elements: https://elements.envato.com/fashion-fashion-landing-page-RCJUDKN

//Photos & Assets: I do not own nor claim to own the rights to any images or photos shared in this class project


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
const image = document.getElementById("quiz-image");
const options = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");
const result = document.getElementById("result");

/*-------------- Functions -------------*/



/*----------- Event Listeners ----------*/


