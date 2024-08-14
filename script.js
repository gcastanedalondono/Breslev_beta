const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}

document.getElementById('whatsapp_button').addEventListener('click', function() {
    const phoneNumber = '+573046780036'; // Reemplaza con tu número de teléfono
    const message = 'Cuentanos tus inquietudes, preguntas y dudas'; // Reemplaza con tu mensaje predefinido
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); // Abre el enlace en una nueva pestaña
});


