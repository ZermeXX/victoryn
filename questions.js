let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question-title");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const skipButton = document.getElementById("skip-button");
const backButton = document.getElementById("back-button");
const homeButton = document.getElementById("home-button");
const scoreElement = document.getElementById("score");

// Масив питань
const questions = [
    {
        question: "Яка офіційна мова України?",
        answers: ["Українська", "Російська", "Польська", "Англійська"],
        correct: 0
    },
    {
        question: "Хто написав «Кобзар»?",
        answers: ["Тарас Шевченко", "Леся Українка", "Іван Франко", "Михайло Коцюбинський"],
        correct: 0
    },
    {
        question: "Як називається найдавніший пам’ятник української писемності?",
        answers: ["Слово о полку Ігоревім", "Києво-Печерський патерик", "Повість минулих літ", "Грамота князя Володимира"],
        correct: 0
    },
    {
        question: "Яка мова є найближчою до української?",
        answers: ["Білоруська", "Польська", "Російська", "Словацька"],
        correct: 0
    },
    {
        question: "Який алфавіт використовує українська мова?",
        answers: ["Кирилиця", "Латиниця", "Глаголиця", "Арабська абетка"],
        correct: 0
    },
    {
        question: "Хто є автором сучасного українського правопису?",
        answers: ["Іван Франко", "Тарас Шевченко", "Пантелеймон Куліш", "Григорій Сковорода"],
        correct: 2
    },
    {
        question: "Яка мова була офіційною в Україні до 1917 року?",
        answers: ["Українська", "Російська", "Польська", "Латина"],
        correct: 1
    },
    {
        question: "Яка книга вважається першим друкованим виданням українською мовою?",
        answers: ["Острозька Біблія", "Кобзар", "Енеїда", "Граматика Смотрицького"],
        correct: 0
    },
    {
        question: "Хто зробив значний внесок у розвиток української літературної мови?",
        answers: ["Тарас Шевченко", "Леся Українка", "Іван Котляревський", "Всі перелічені"],
        correct: 3
    },
    {
        question: "Яка мова є державною в Україні згідно з Конституцією?",
        answers: ["Українська", "Російська", "Польська", "Кримськотатарська"],
        correct: 0
    },
    {
        question: "Який рік вважається початком української писемності?",
        answers: ["988", "1240", "1569", "1834"],
        correct: 0
    },
    {
        question: "Хто є автором поеми «Енеїда»?",
        answers: ["Іван Котляревський", "Тарас Шевченко", "Леся Українка", "Григорій Сковорода"],
        correct: 0
    },
    {
        question: "Яка мова була офіційною в Україні під час Радянського Союзу?",
        answers: ["Українська", "Російська", "Обидві мови", "Жодна з перелічених"],
        correct: 1
    },
    {
        question: "Яка мова є найпоширенішою в світі?",
        answers: ["Китайська", "Англійська", "Іспанська", "Українська"],
        correct: 0
    },
    {
        question: "Хто з українських письменників отримав Нобелівську премію з літератури?",
        answers: ["Іван Франко", "Леся Українка", "Тарас Шевченко", "Жоден з перелічених"],
        correct: 3
    },
    {
        question: "Яка мова є найближчою до української за лексикою?",
        answers: ["Білоруська", "Польська", "Російська", "Словацька"],
        correct: 0
    },
    {
        question: "Яка мова є офіційною в Європейському Союзі?",
        answers: ["Англійська", "Французька", "Німецька", "Українська"],
        correct: 3
    },
    {
        question: "Хто є автором «Заповіту»?",
        answers: ["Тарас Шевченко", "Іван Франко", "Леся Українка", "Григорій Сковорода"],
        correct: 0
    },
    {
        question: "Яка мова є найдавнішою в світі?",
        answers: ["Санскрит", "Латина", "Грецька", "Шумерська"],
        correct: 3
    },
    {
        question: "Яка мова є найближчою до української за граматикою?",
        answers: ["Білоруська", "Польська", "Російська", "Словацька"],
        correct: 0
    }
];

// Функція для відображення поточного питання
function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });

    // Приховуємо кнопку "Назад" на першому питанні
    if (currentQuestion === 0) {
        backButton.style.display = "none";
    } else {
        backButton.style.display = "inline-block";
    }

    nextButton.disabled = true; // Деактивуємо кнопку "Наступне питання"
}

// Функція для обробки вибору відповіді
function selectAnswer(index) {
    const question = questions[currentQuestion];
    const buttons = answersElement.querySelectorAll("button");
    if (index === question.correct) {
        score++;
        buttons[index].classList.add("correct");
    } else {
        buttons[index].classList.add("incorrect");
        buttons[question.correct].classList.add("correct");
    }
    scoreElement.textContent = `Бали: ${score}`;
    nextButton.disabled = false; // Активуємо кнопку "Наступне питання"
}

// Функція для переходу до наступного питання
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "results.html";
    }
}

// Функція для пропуску питання
function skipQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "results.html";
    }
}

// Функція для повернення до попереднього питання
function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Функція для повернення на головну сторінку
function goHome() {
    window.location.href = "index.html";
}

// Додаємо обробники подій для кнопок
nextButton.addEventListener("click", nextQuestion);
skipButton.addEventListener("click", skipQuestion);
backButton.addEventListener("click", goBack);
homeButton.addEventListener("click", goHome);

// Показуємо перше питання при завантаженні сторінки
showQuestion();
