const finalScoreElement = document.getElementById("final-score");
const leaderboardElement = document.getElementById("leaderboard");
const restartButton = document.getElementById("restart-button");

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
const score = parseInt(localStorage.getItem("score")) || 0;

finalScoreElement.textContent = `Ваші бали: ${score}`;

// Додавання результатів до рейтингу
leaderboard.push(score);
leaderboard.sort((a, b) => b - a); // Сортування за зменшенням
localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

// Відображення рейтингу
leaderboard.forEach((score, index) => {
    const li = document.createElement("li");
    li.textContent = `Місце ${index + 1}: ${score} балів`;
    leaderboardElement.appendChild(li);
});

restartButton.addEventListener("click", () => {
    window.location.href = "index.html";
});