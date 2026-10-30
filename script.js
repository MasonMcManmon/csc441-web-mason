// Class 15 : Step 1 - This is running
console.log("script.js is running");

// Class 15 : Step 2 - Put this year in the footer
const yearSpan = document.querySelector("#year");
// Lab 15 - Task 2 - Putting year in an if statement
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15 : Step 3 - A button that chages the page
const themeButton = document.querySelector("#theme-toggle");
// Lab 15 - Task 3 - Adding the button to an if statement
if (themeButton) {
    // Lab 15 : Task 4 - Making the choice stick
    if (localStorage.getItem("theme") === "Light") {
        document.body.classList.add("Light");
        themeButton.textContent = "Dark Mode";
    } 


    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("Light")
        // Lab 15 - Task 3 - Making the button say what it will do
        if (document.body.classList.contains("Light")) {
            themeButton.textContent = "Dark Mode";
            localStorage.setItem("theme", "Light");
        } else {
            themeButton.textContent = "Light Mode";
            localStorage.setItem("theme", "Dark");
        }
    });
}

// Lab 15 : Task 5 - Adding a Back-to-top Button
const backToTopButton = document.querySelector("#Back-to-top");

if (backToTopButton) {
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({top: 0,behavior: "smooth"});
    });
}

// Class 16 : Step 4 - Handleing the submit
const contactForm = document.querySelector("#Contact-Form");

// Class 16 : Step 4 - Handleing the submit
if (contactForm) {
    const formStatus = document.querySelector("#Form-Status");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#Name").value;
        formStatus.textContent = "Thanks, " + name + ".Your message is ready to send!";

        contactForm.reset();
    });
}
