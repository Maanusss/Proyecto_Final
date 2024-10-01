let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active'); // Muestra/oculta el navbar
};

// Agregar un evento para cerrar el menú cuando se hace clic en un enlace
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Cierra el menú
    });
});
