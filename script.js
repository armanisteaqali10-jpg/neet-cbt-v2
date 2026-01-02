const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener("click", () => {

        // Remove previous selection
        options.forEach(opt => opt.classList.remove("selected"));

        // Select clicked option
        option.classList.add("selected");

        console.log("Selected:", option.dataset.option);
    });
});


