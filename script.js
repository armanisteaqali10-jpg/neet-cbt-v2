const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener("click", () => {

        // 1️⃣ Remove selected class from all options
        options.forEach(opt => opt.classList.remove("selected"));

        // 2️⃣ Add selected class to clicked option
        option.classList.add("selected");

        // 3️⃣ Log selected option (for testing)
        console.log("Selected:", option.dataset.option);
    });
});

