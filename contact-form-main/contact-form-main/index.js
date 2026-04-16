const form = document.querySelector('#contact-form');

form.addEventListener('submit',function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values (trim to handle whitespace)
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#mail').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Validation logic: Check all fields for emptiness
    const formData = [firstName, lastName, email, message];
    let isValid = true;
    for (let i = 0; i < formData.length; i++) {
        if (formData[i] === '') {
            isValid = false;
            document.querySelector('.error-message').classList.remove('hidden');
            break; // Exit on first empty field
        } else {
            document.querySelector('.error-message').classList.add('hidden');
        }
    }

    // Check if the email is valid
    if (isValid) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            document.querySelector('.error-mail').classList.remove('hidden');
        } else {
            document.querySelector('.error-mail').classList.add('hidden');
        }
    }

    // Check if a query type is selected
    if (isValid) {
        const queryTypes = document.querySelectorAll('input[name="query-type"]');
        const isQueryTypeSelected = Array.from(queryTypes).some(el => el.checked);
        if (!isQueryTypeSelected) {
            isValid = false;
            document.querySelector('.error-query').classList.remove('hidden');
        } else {
            document.querySelector('.error-query').classList.add('hidden');
        }
    }

    // Consent checkbox validation
    if (isValid) {
        const consentCheckbox = document.querySelector('#consent');
        if (!consentCheckbox.checked) {
            isValid = false;
            document.querySelector('.error-consent').classList.remove('hidden');
        } else {
            document.querySelector('.error-consent').classList.add('hidden');
        }
    }

    // If all validations pass, show success and reset
    if (isValid) {
        const successMessage = document.querySelector('.success-message');
        successMessage.classList.remove('hidden');
        // Assuming 'form' is the form element; adjust if needed
         // Add this if not defined
        form.reset();
    }
});