// script.js

// Efecto básico al pasar el ratón por los enlaces
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ffffff'; // Cambia a blanco al pasar el ratón
    });

    link.addEventListener('mouseout', function() {
        this.style.color = '#FDB927'; // Vuelve al dorado cuando el ratón se aleja
    });
});

// Animación básica al cargar la página
window.onload = function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
};

// Placeholder para futuras funcionalidades y efectos
function init() {
    // Añadir aquí otras animaciones o interacciones
}

init();
