const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}

document.addEventListener('DOMContentLoaded', function() {
    var whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open('https://wa.me/1234567890', '_blank'); // Reemplaza con tu número de WhatsApp
        });
    });
});

