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
 
    // Lab 16 : Task 4 - One thing on your own
    const message = document.querySelector("#Message");
    const charCount = document.querySelector("#Char-Count");

    if (message && charCount) {
        message.addEventListener("input", function() {
            charCount.textContent = message.value.length + " characters";
        });
    }

    const nameInput = document.querySelector("#Name");
    const emailInput = document.querySelector("#Email");
    const messageInput = document.querySelector("#Message");
   

    nameInput.value = localStorage.getItem("draftName") || "";
    emailInput.value = localStorage.getItem("draftEmail") || "";
    messageInput.value = localStorage.getItem("draftMessage") || "";
    charCount.textContent = messageInput.value.length + " Characters";

    contactForm.addEventListener("input", function() {
        localStorage.setItem("draftName", nameInput.value);
        localStorage.setItem("draftEmail", emailInput.value);
        localStorage.setItem("draftMessage", messageInput.value);
    });



    // Lab 16 : Task 1 - My own check before accepting it
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const draftName = nameInput.value;
        const draftEmail = emailInput.value;
        const draftMessage = messageInput.value;

        // Lab 16 : Task 2 - clear the error message once they start fixing it
        contactForm.addEventListener("input", function() {
            if (formStatus.classList.contains("error")) {
                formStatus.textContent = "";
                formStatus.classList.remove("error");
            }
        });

        event.preventDefault();

        const name = document.querySelector("#Name").value;
        const message = document.querySelector("#Message").value;
        const email = document.querySelector("#Email").value;

    
        if (name.length === 0) {
            formStatus.textContent = "Please enter your name.";
            formStatus.classList.add("error");
            return;
        }
        if (email.length === 0) {
            formStatus.textContent = "Please enter your email.";
            formStatus.classList.add("error");
            return;
        }
        if (message.length < 10) {
            formStatus.textContent = "Please write at least 10 characters.";
            formStatus.classList.add("error");
            return;
        }

        formStatus.classList.remove("error");


        formStatus.textContent = "Thanks, " + name + ".Your message has been sent!";

        contactForm.reset();

        localStorage.removeItem("draftName");
        localStorage.removeItem("draftEmail");
        localStorage.removeItem("draftMessage");
        
        charCount.textContent = "0 Characters";
    });
}



