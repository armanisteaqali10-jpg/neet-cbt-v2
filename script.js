let currentQuestion = 0;

// THIS STORES STUDENT ANSWERS
let answers = {};

const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-btn");

let selectedOption = null;

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

  alert("Answer saved! (Check console)");
});
