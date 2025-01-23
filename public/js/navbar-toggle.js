
function initializeNavbarToggle() {
    const headerNavbar = document.getElementById('header-navbar');
    const headerNavbarToggle = document.getElementById('header-navbar-toggle');
    const menuItems = document.querySelectorAll('#header-navbar a');

    if (headerNavbar && headerNavbarToggle) {
        headerNavbarToggle.addEventListener('click', () => {
            const isExpanded = headerNavbarToggle.getAttribute('aria-expanded') === 'true';
            headerNavbarToggle.setAttribute('aria-expanded', !isExpanded);

            if (isExpanded) {
                headerNavbar.removeAttribute('data-open');
            } else {
                headerNavbar.setAttribute('data-open', 'true');
            }
        });

        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                headerNavbarToggle.setAttribute('aria-expanded', 'false');
                headerNavbar.removeAttribute('data-open');
            });
        });
    }
}

document.addEventListener('astro:page-load', initializeNavbarToggle);
