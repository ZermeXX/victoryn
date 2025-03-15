let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question-title");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const skipButton = document.getElementById("skip-button");
const backButton = document.getElementById("back-button");
const homeButton = document.getElementById("home-button");
const scoreElement = document.getElementById("score");

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
