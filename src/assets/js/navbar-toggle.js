const headerNavbar = document.getElementById('header-navbar');
const headerNavbarToggle = document.getElementById('header-navbar-toggle');

// Escuchar el evento "click" en el botón de toggle
headerNavbarToggle.addEventListener('click', () => {
    // Verificar el estado actual de "aria-expanded" y alternarlo
    const isExpanded = headerNavbarToggle.getAttribute('aria-expanded') === 'true';
    headerNavbarToggle.setAttribute('aria-expanded', !isExpanded);

    // Alternar la clase "data-[open]" en el navbar para activar estilos dinámicos
    if (isExpanded) {
        headerNavbar.removeAttribute('data-open');
    } else {
        headerNavbar.setAttribute('data-open', true);
    }
});