// Function to validate input fields
function validateInput(input) {
    if (input.value.trim() === "") {
        input.nextElementSibling.style.display = "inline";
    } else {
        input.nextElementSibling.style.display = "none";
    }
}

// Adding event listener to submit button
document.getElementById('sendMessageBtn').onclick = function(event) {
    var name = document.getElementById('yourName');
    var email = document.getElementById('yourEmail');
    var message = document.getElementById('yourMessage');
    
    var valid = true;
    
    if (name.value.trim() === "") {
        name.nextElementSibling.style.display = 'inline';
        valid = false;
    }
    if (email.value.trim() === "") {
        email.nextElementSibling.style.display = 'inline';
        valid = false;
    }
    if (message.value.trim() === "") {
        alert('Message is required.');
        valid = false;
    }
    
    if (valid) {
        alert(`Thank you, ${name.value}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    }
    
    event.preventDefault();
};

// Function to handle form submission
function handleFormSubmission() {
    const name = document.getElementById('yourName').value;
    const email = document.getElementById('yourEmail').value;
    const message = document.getElementById('yourMessage').value;

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    }
}

// Adding event listener to send message button
document.getElementById('sendMessageBtn').addEventListener('click', handleFormSubmission);


// Function to validate input fields
function validateInput(input) {
    if (input.value.trim() === "") {
        input.nextElementSibling.style.display = "inline";
    } else {
        input.nextElementSibling.style.display = "none";
    }
}

// Adding event listener to all input elements within the contact_form class
document.querySelectorAll('.contact_form .input_contact').forEach((input) => {
    input.addEventListener('input', () => validateInput(input));
});

// Adding event listener to send message button
document.getElementById('sendMessageBtn').onclick = function(event) {
    var name = document.getElementById('yourName');
    var email = document.getElementById('yourEmail');
    var message = document.getElementById('yourMessage');
    
    var valid = true;
    
    if (name.value.trim() === "") {
        name.nextElementSibling.style.display = 'inline';
        valid = false;
    }
    if (email.value.trim() === "") {
        email.nextElementSibling.style.display = 'inline';
        valid = false;
    }
    if (message.value.trim() === "") {
        message.nextElementSibling.style.display = 'inline';
        valid = false;
    }
    
    if (valid) {
        alert(`Thank you, ${name.value}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    }
    
    event.preventDefault();
};

// // Adding event listener to submit button
// document.getElementById('submitBtn').onclick = function(event) {
//     var firstName = document.getElementById('firstName');
//     var lastName = document.getElementById('lastName');
//     var message = document.getElementById('message');
    
//     var valid = true;
    
//     if (firstName.value.trim() === "") {
//         firstName.nextElementSibling.style.display = 'inline';
//         valid = false;
//     }
//     if (lastName.value.trim() === "") {
//         lastName.nextElementSibling.style.display = 'inline';
//         valid = false;
//     }
//     if (message.value.trim() === "") {
//         alert('Message is required.');
//         valid = false;
//     }
    
//     if (valid) {
//         alert(`Thank you, ${firstName.value}! Your message has been sent.`);
//         document.getElementById('contactForm').reset();
//     }
    
//     event.preventDefault();
// };

window.onload = function() {
    const slides = [
      "../images/Background images/Project1.jpg",
      "../images/Background images/leavein for kids.jpg",
      "../images/Background images/mane choice.jpg",
      "../images/Background images/Project1.jpg",
      "../images/Background images/mane choice.jpg",
      "../images/background images/mane choice 2.jpg"
    ];
    
    let slideIndex = 0;
    const slideshowElement = document.querySelector('.slideshow');
    const transitionTime = 4000; // Time per slide in milliseconds (4000ms = 4s)
  
    const showSlides = () => {
      slideshowElement.style.backgroundImage = `url(${slides[slideIndex]})`;
      slideIndex = (slideIndex + 1) % slides.length;
      setTimeout(showSlides, transitionTime);
    };
  
    showSlides();
  };
  
