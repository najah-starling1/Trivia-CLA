// Import package for user input
const readline = require("readline-sync");

// =======================
// QUESTIONS ARRAY (Objects)
// =======================
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["A. Hyper Trainer Marking Language", "B. Hyper Text Markup Language", "C. Hyper Text Marketing Language"],
        answer: "B"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["A. HTML", "B. JQUERY", "C. CSS"],
        answer: "C"
    },
    {
        question: "Which is not a JavaScript Framework?",
        options: ["A. Python Script", "B. React", "C. Angular"],
        answer: "A"
    },
    {
        question: "Which is used for web development?",
        options: ["A. PHP", "B. Python", "C. Both"],
        answer: "C"
    }
];

// =======================
// VARIABLES
// =======================
let score = 0;
let timeLimit = 30; // seconds
let startTime;

// =======================
// START GAME FUNCTION
// =======================
function startGame() {
    console.log("🎮 Welcome to the Trivia Game!");
    console.log("You have 30 seconds to answer all questions.\n");

    readline.question("Press ENTER to start...");

    startTime = Date.now();

    askQuestions();
}

// =======================
// ASK QUESTIONS FUNCTION
// =======================
function askQuestions() {

    questions.forEach((q, index) => {

        // Check time
        let currentTime = (Date.now() - startTime) / 1000;

        if (currentTime > timeLimit) {
            console.log("\n⏰ Time is up!");
            return endGame();
        }

        console.log(`\nQuestion ${index + 1}: ${q.question}`);

        q.options.forEach(option => console.log(option));

        let userAnswer = readline.question("Your answer (A, B, C): ").toUpperCase();

        checkAnswer(userAnswer, q.answer);
    });

    endGame();
}

// =======================
// CHECK ANSWER FUNCTION
// =======================
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        console.log("✅ Correct!");
        score++;
    } else {
        console.log(`❌ Wrong! Correct answer is ${correctAnswer}`);
    }
}

// =======================
// END GAME FUNCTION
// =======================
function endGame() {
    console.log("\n🎉 Game Over!");
    console.log(`Your final score is: ${score}/${questions.length}`);

    // Feedback
    let percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        console.log("🔥 Excellent!");
    } else if (percentage >= 50) {
        console.log("👍 Good job!");
    } else {
        console.log("📚 Keep practicing!");
    }

    process.exit();
}

// =======================
// START THE GAME
// =======================
startGame();