let currentQuestionIndex = 0;
let selectedAnswer = null;

const questionImage = document.getElementById("question-image");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");
const title = document.getElementById("question-title");

function loadQuestion() {
  const q = questions[currentQuestionIndex];

  title.textContent = `NEET CBT – Question ${q.id}`;
  questionImage.src = q.image;

  selectedAnswer = null;
  options.forEach(btn => {
    btn.classList.remove("selected");
  });
}

options.forEach(button => {
  button.addEventListener("click", () => {
    options.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedAnswer = button.dataset.option;
  });
});

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Please select an option");
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    alert("Test completed!");
    return;
  }

  loadQuestion();
});

loadQuestion();
