    function validateInput(input) {
        if (input.value.trim() === "") {
            input.nextElementSibling.style.display = "inline";
        } else {
            input.nextElementSibling.style.display = "none";
        }
    }

    document.getElementById('submitBtn').onclick = function(event) {
        var firstName = document.getElementById('firstName');
        var lastName = document.getElementById('lastName');
        var message = document.getElementById('message');
        
        if (firstName.value.trim() === "") {
            document.getElementById('firstNameError').style.display = 'inline';
            event.preventDefault();
        }
        if (lastName.value.trim() === "") {
            document.getElementById('lastNameError').style.display = 'inline';
            event.preventDefault();
        }
        if (message.value.trim() === "") {
            alert('Message is required.');
            event.preventDefault();
        }
    }
//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("nav_background");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // image changes every 5 seconds
}

automaticSlide();
