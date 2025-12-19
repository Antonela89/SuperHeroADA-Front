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

	$text.textContent = 'BUSCANDO...';
	$text.classList.remove('hidden');

	// Ocultar los resultados viejos para el efecto sorpresa
	if ($resultsSection) $resultsSection.classList.add('hidden');

	// SIMULAR CARGA (O esperar el fetch real)
	// Para que el usuario vea la máscara
	await new Promise((resolve) => setTimeout(resolve, 800));

	// Ejecutar el filtrado
	if (callback) await callback();

	// SECUENCIA DE EXPLOSIÓN
	triggerExplosion();
};

const triggerExplosion = () => {
	$text.textContent = 'KA-POW!';
	// Quitar la animación de latido suave y el estilo base
	$text.classList.remove(
		'animate-heartbeat',
		'comic-font-base',
		'text-white'
	);

	// Agregar el estilo EXPLOSIVO
	$text.classList.add('comic-font-kapow', 'animate-comic-pop');

	// Detener rebote del icono y activar explosión
	$icon.classList.remove('animate-bounce');

	// Pequeño delay para preparar el impacto
	setTimeout(() => {
		$icon.classList.add('animate-explode'); // Máscara crece
		$shockwave.classList.add('animate-shockwave'); // Onda amarilla fondo

		// Ocultar texto 
		setTimeout(() => {
			$text.classList.add('hidden');
		}, 200);
	}, 200);

	// FINALIZAR: Mostrar resultados y ocultar loader
	setTimeout(() => {
		$loader.classList.add('hidden'); // Quitar loader

		// APERTURA DE TELÓN: Mostrar resultados
		if ($resultsSection) {
			$resultsSection.classList.remove('hidden');
			$resultsSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}

		// LIMPIEZA DE CLASES (Importante para que la prox búsqueda empiece bien)
		$text.classList.remove('comic-font-kapow', 'animate-comic-pop', 'hidden');
		// Devolvemos las clases base
		$text.classList.add(
			'comic-font-base',
			'text-texto',
			'animate-heartbeat'
		);
	}, 800); // Esperar a que termine la animación de explosión (0.8s)
};
