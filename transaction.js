function validateForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const contact = document.getElementById("contact").value;

    // Clear any previous error messages
    document.getElementById("name-error-message").textContent = "";
    document.getElementById("age-error-message").textContent = "";
    document.getElementById("contact-error-message").textContent = "";

    let hasErrors = false;

    if (age.trim() === "") {
        document.getElementById("age-error-message").textContent = "Age is required.";
        hasErrors = true;
    } else {
        const ageValue = parseInt(age);
        if (isNaN(ageValue) || ageValue < 18) {
            document.getElementById("age-error-message").textContent = "Age must be a valid number and at least 18.";
            hasErrors = true;
        }
    }

    if (name.trim() === "") {
        document.getElementById("name-error-message").textContent = "Name is required.";
        hasErrors = true;
    }

    if (contact.trim() === "" || !/^\d+$/.test(contact)) {
        document.getElementById("contact-error-message").textContent = "Valid contact number is required.";
        hasErrors = true;
    }

    if (!hasErrors) {
        window.location.href = "success.html";
    }
}
