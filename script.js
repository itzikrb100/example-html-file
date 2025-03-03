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


// Function to parse and display query parameters
function displayQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const displayArea = document.createElement("div");
    displayArea.innerHTML = "<h3>Query Parameters:</h3>";
    
    params.forEach((value, key) => {
        displayArea.innerHTML += `<p><strong>${key}</strong>: ${value}</p>`;
    });

    document.body.appendChild(displayArea);
}

// Call function when the page loads
window.onload = displayQueryParams;


async function startMicrophone() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted, stream started:", stream);
    } catch (error) {
        console.error("Microphone access error:", error);
        setTimeout(startMicrophone, 3000);  // Retry after 3 seconds
    }
}

