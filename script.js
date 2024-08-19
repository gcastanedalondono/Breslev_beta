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

document.addEventListener('DOMContentLoaded', function() {
    var youtubeButtons = document.querySelectorAll('.youtube-btn');
    var youtubeChannelUrl = 'https://www.youtube.com/@asociacionbreslevcolombia24/videos'; // Reemplaza con la URL de tu canal de YouTube

    youtubeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open(youtubeChannelUrl, '_blank');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var facebookButtons = document.querySelectorAll('.facebook-btn');
    var facebookProfileUrl = 'https://www.facebook.com/search/top?q=asociacion%20breslev%20colombia'; // Reemplaza con la URL de tu perfil de Facebook

    facebookButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open(facebookProfileUrl, '_blank');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var soundcloudButtons = document.querySelectorAll('.soundcloud-btn');
    var soundcloudProfileUrl = 'https://soundcloud.com/asociacion-breslev-colombia'; // Reemplaza con la URL de tu perfil de SoundCloud

    soundcloudButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open(soundcloudProfileUrl, '_blank');
        });
    });
});