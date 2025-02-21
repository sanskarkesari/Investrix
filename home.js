document.addEventListener("DOMContentLoaded", function() {
    const contactButtons = document.querySelectorAll('.contact-btn');

    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Contact feature is not implemented yet!');
        });
    });
});