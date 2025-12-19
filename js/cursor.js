// Nodos del DOM
const $dot = document.getElementById('cursor-dot');
const $outline = document.getElementById('cursor-outline');

if ($dot && $outline) {
    
    // Movimiento
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Punto central (instantáneo)
        $dot.style.left = `${posX}px`;
        $dot.style.top = `${posY}px`;

        // Icono seguidor (con delay suave)
        $outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" }); 
    });

document.addEventListener('mouseover', (e) => {
        // Ingreso a un elemento interactivo
        const target = e.target.closest('a, button, input, select, .cursor-pointer');

        if (target) {
            // Si es interactivo, activar el efecto
            $outline.classList.add('cursor-hover');
            $dot.classList.add('dot-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        // Salida de un elemento interactivo
        const target = e.target.closest('a, button, input, select, .cursor-pointer');

        if (target) {
            // Desactivar el efecto
            $outline.classList.remove('cursor-hover');
            $dot.classList.remove('dot-hover');
        }
    });
}