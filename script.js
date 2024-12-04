// Apply mouseover and mouseout effects to navigation links and buttons
document.querySelectorAll('.nav-link, .cta-button').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '#ffcccb';
        element.style.color = '#333';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '';
        element.style.color = '';
    });
});
