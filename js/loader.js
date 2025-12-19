// Nodos del DOM
const $loader = document.getElementById('comic-loader');
const $icon = document.getElementById('loader-icon');
const $text = document.getElementById('loader-text');
const $shockwave = document.getElementById('loader-shockwave');
const $resultsSection = document.getElementById('main-content'); 

// Función para mostrar el loader y ejecutar la acción
export const showComicLoader = async (callback) => {
    
    // RESETER ESTADO (Por si se usó antes)
    $loader.classList.remove('hidden');
    $icon.classList.remove('animate-explode');
    $icon.classList.add('animate-bounce'); // Vuelve a rebotar
    $shockwave.classList.remove('animate-shockwave');
    
    $text.textContent = "BUSCANDO...";
    $text.classList.remove('hidden');

    // Ocultar los resultados viejos para el efecto sorpresa
    if($resultsSection) $resultsSection.classList.add('hidden');

    // SIMULAR CARGA (O esperar el fetch real)
    // Para que el usuario vea la máscara
    await new Promise(resolve => setTimeout(resolve, 800));

    // Ejecutar el filtrado
    if (callback) await callback();

    // SECUENCIA DE EXPLOSIÓN
    triggerExplosion();
};

const triggerExplosion = () => {
    $text.textContent = "KA-POW!";
    $text.classList.add('text-acento', 'scale-125'); // Amarillo y más grande
    
    // Detener rebote y activar explosión
    $icon.classList.remove('animate-bounce');
    
    // Pequeño delay para preparar el impacto
    setTimeout(() => {
        $icon.classList.add('animate-explode');  // Máscara crece
        $shockwave.classList.add('animate-shockwave'); // Onda amarilla fondo
        
        // Ocultar texto rápidamente
        setTimeout(() => { $text.classList.add('hidden'); }, 100);
    }, 200);

    // FINALIZAR: Mostrar resultados y ocultar loader
    setTimeout(() => {
        $loader.classList.add('hidden'); // Quitar loader
        
        // APERTURA DE TELÓN: Mostrar resultados
        if($resultsSection) {
            $resultsSection.classList.remove('hidden');
            $resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Limpiar estilos extra del texto para la próxima
        $text.classList.remove('text-acento', 'scale-125');
    }, 600); // Esperar a que termine la animación de explosión (0.6s)
};