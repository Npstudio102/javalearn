console.log("JavaScript file linked!");

// Quiz questions and answers
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Highly Typed Machine Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Which programming language is primarily used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 2
    }
];

function checkQuizAnswers(event) {
    event.preventDefault();

    let score = 0;
    const userAnswers = [];

    // Collect user answers
    quizQuestions.forEach((_, index) => {
        const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
        userAnswers.push(selectedAnswer ? parseInt(selectedAnswer.value) : -1); // -1 if no answer selected
    });

    // Check answers and calculate score
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === quizQuestions[index].correctAnswer) {
            score++;
        }
    });

    // Display the result
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.textContent = `Your score: ${score} out of ${quizQuestions.length}`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Add quiz form submission listener
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', checkQuizAnswers);
    }

document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('sign-in-form');
    const loginForm = document.getElementById('login-form');

    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('sign-in-username').value;
            const email = document.getElementById('sign-in-email').value;
            const password = document.getElementById('sign-in-password').value;
            const confirmPassword = document.getElementById('sign-in-confirm-password').value;

            console.log('Sign In Form Data:');
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const loginEmailUsername = document.getElementById('login-email-username').value;
            const loginPassword = document.getElementById('login-password').value;

            console.log('Login Form Data:');
            console.log('Email/Username:', loginEmailUsername);
            console.log('Password:', loginPassword);
        });
    }
});
});
