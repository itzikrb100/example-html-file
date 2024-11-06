// Example script for handling form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for reaching out! We’ll get back to you soon.");
        });
    }
});
