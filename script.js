const quizData = [
    {
        question: "What is the best front-end framework?",
        a: "Vue",
        b: "Angular",
        c: "React",
        d: "Vanila",
        correct: "c",
    },
    {
        question: "Who is the Chencellor of Germany?",
        a: "Emanual Macron",
        b: "Angela Morkel",
        c: "Olaf Scholz",
        d: "Philip Lamp",
        correct: "c",
    },
    {
        question: "What does JSON stand for?",
        a: "JavaScript Object Notation",
        b: "Jason Object Notation",
        c: "Hypertext Markup Language",
        d: "Joint Service Object Node",
        correct: "a",
    },
    {
        question: "What year was iPad launched?",
        a: "2006",
        b: "2010",
        c: "2009",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
