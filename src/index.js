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

function validateInput(input) {
    const errorElement = document.getElementById(`${input.id}Error`);
    if (input.validity.valueMissing) {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}
var firstIndex=0;
function automaticSlide(){
    setTimeout(automaticSlide, 3000);
    var pics;
    const img=document.querySelectorAll('.container .images img');
    for(pics=0; pics<img.length;pics++){
        img[pics].style.display="none";
    }
    firstIndex++;
    if(firstIndex > img.length){
        firstIndex =1;
    }
    img[firstIndex -1].style.display="block";
}

automaticSlide();
