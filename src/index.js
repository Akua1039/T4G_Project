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
    'images\Project2.jpg',
    'images\Mielle Coiling custard.jpg',
    'images\Cantu for kids.jpg',
    'images\coiling custard new.jpg', // Add more images as needed
    'images\Yogurt manuka.jpg',
    'images\your_image_6.jpg',
    // Continue adding more images
];

let currentSlide = 0;
const slideshowElement = document.getElementById('slideshow');

function showNextSlide() {
    // Ensure the next slide image is preloaded for smoother transition
    const img = new Image();
    img.src = slides[currentSlide].slice(4, -1); // Remove 'url(' and ')' from the string
    
    img.onload = () => {
        slideshowElement.style.backgroundImage = slides[currentSlide];
        currentSlide = (currentSlide + 1) % slides.length;
    };
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);

// Initialize slideshow
document.addEventListener('DOMContentLoaded', showNextSlide);
