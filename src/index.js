// Function to validate form inputs
function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !lastName || !message) {
        alert('Please fill out all fields.');
        return false;
    }
    return true;
}

// Function for form submission
function handleSubmit() {
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
}

// Add event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', handleSubmit);

// Slideshow functionality for navigation background
const slides = [
    'images/Project2.jpg',
    'images/Mielle Coiling custard.jpg',
    'images/Cantu for kids.jpg',
    'images/coiling custard new.jpg',
    'images/Yogurt manuka.jpg',
    'images/your_image_6.jpg',
];

function showNextSlide() {
    slideshowElement.style.backgroundImage = `url('${slides[currentSlide]}')`;
    currentSlide = (currentSlide + 1) % slides.length;
}
function validateInput(input) {
    const errorElement = document.getElementById(`${input.id}Error`);
    if (input.validity.valueMissing) {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

