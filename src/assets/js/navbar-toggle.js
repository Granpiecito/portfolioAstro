document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('#header-navbar-toggle');
    const navbar = document.querySelector('#header-navbar'); 

    if (toggleButton && navbar) {
        toggleButton.addEventListener("click", () => {

            navbar.classList.toggle("hidden");


            const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
            toggleButton.setAttribute("aria-expanded", !isExpanded);
        });
    }
});