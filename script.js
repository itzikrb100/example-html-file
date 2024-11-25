// Example script for handling form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            // Start microphone when the form is submitted
            await startMicrophone();
            
            // Display the alert message after microphone access is started
            alert("Thank you for reaching out! We’ll get back to you soon.");
        });
    }
});

async function startMicrophone() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted, stream started:", stream);
    } catch (error) {
        console.error("Microphone access error:", error);
        setTimeout(startMicrophone, 3000);  // Retry after 3 seconds
    }
}

