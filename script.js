console.log("neet-cbt-v2 script loaded");
const questions = [
  {
    image: "images/q1.png",
    options: {
      A: "1 × 10⁻³ mm",
      B: "2.5 × 10⁻³ mm",
      C: "2 × 10⁻³ mm",
      D: "5 × 10⁻³ mm"
    }
  },
  {
    image: "images/q2.png",
    options: {
      A: "Option A",
      B: "Option B",
      C: "Option C",
      D: "Option D"
    }
  }
];

const questionImg = document.getElementById("question-image");

let currentQuestion = 0;

// THIS STORES STUDENT ANSWERS
let answers = {};

const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");

let selectedOption = null;
function renderQuestion() {
  const q = questions[currentQuestion];

  // If no more questions
  if (!q) {
    alert("Test completed!");
    console.log("Final answers:", answers);
    return;
  }

  // Set question image
  questionImg.src = q.image;

  // Set options text
  options.forEach(option => {
    const key = option.dataset.option; // A, B, C, D
    option.textContent = q.options[key];
    option.classList.remove("selected");
  });

  // Reset selected option
  selectedOption = null;
}

// OPTION CLICK
options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(o => o.classList.remove("selected"));
    option.classList.add("selected");
    selectedOption = option.dataset.option;
  });
});

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
  if (!selectedOption) {
    alert("Please select an option before continuing.");
    return;
  }

  // SAVE ANSWER
  answers[currentQuestion] = selectedOption;

  console.log("Current answers object:", answers);

  // TEMP: Move to next question index
  currentQuestion++;
  selectedOption = null;

  // Remove selection UI
  options.forEach(o => o.classList.remove("selected"));

  renderQuestion();
});

renderQuestion();
