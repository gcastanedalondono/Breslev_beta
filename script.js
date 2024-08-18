const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}

const whatapp_icon = document.querySelectorAll('.whatsapp_button');

whatapp_icon.forEach(icono =>)

.addEventListener('click', function() {
    const phoneNumber = '+573046780036'; // Reemplaza con tu número de teléfono
    const message = 'Cuentanos tus inquietudes, preguntas y dudas'; // Reemplaza con tu mensaje predefinido
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); // Abre el enlace en una nueva pestaña
});


const iconos = document.querySelectorAll('.icono');

iconos.forEach(icono => {
    // Aquí puedes aplicar la función o el evento que desees
    icono.addEventListener('click', () => {
        // Acción que quieres realizar cuando el icono es clickeado
        console.log('Icono clickeado');
    });
});