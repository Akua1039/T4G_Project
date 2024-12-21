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
// event listener added to the submit button
document.getElementById('submitBtn').addEventListener('click', handleSubmit);
// hover effects added to show "Add to Cart" text on product images
document.querySelectorAll('.product_images, .products_images, .prod_images').forEach(product => {
    product.addEventListener('mouseover', () => {
        product.querySelector('p').style.display = 'block';
    });
    product.addEventListener('mouseout', () => {
        product.querySelector('p').style.display = 'none';
    });
});
