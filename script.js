document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thanks for your interest! Waitlist sign-up coming soon.');
    });
});
