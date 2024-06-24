window.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profile-img');
    profileImg.classList.add('slide-in');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    // Here you would typically handle the form submission, e.g., send the data to a server.
});
