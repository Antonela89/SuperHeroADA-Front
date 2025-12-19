import { openModal } from './modal.js';

// Nodo del DOM
const $conteiner = document.getElementById('results-container');

// Función para renderizar los resultados de la api
export const renderHeros = (results) => {
	// Limpiar el contenedor antes de renderizar la nueva página
	$conteiner.innerHTML = '';

	// Recorrer el array de resultados con un forEach
	results.forEach((hero) => {
		// Por cada elemento, crear un article
		const card = document.createElement('article');
		// Lógica para colores según bando (Good/Bad)
		// Variables por defecto
		const alignment = hero.biography.alignment;
		let borderColor = 'border-acento shadow-acento/50';
		let badgeColor = 'bg-acento text-gray-900';
		let separatorColor = 'bg-acento';

		if (alignment === 'good') {
			borderColor = 'border-cyan-400 shadow-cyan-400/50';
			badgeColor = 'bg-cyan-400';
			separatorColor = 'bg-cyan-400';
		} else if (alignment === 'bad') {
			borderColor = 'border-fuchsia-600 shadow-fuchsia-600/50';
			badgeColor = 'bg-fuchsia-600';
			separatorColor = 'bg-fuchsia-600';
		}

		// Manejo de datos nulos (por si la API falla en alguno)
		const race = hero.appearance.race || 'Desconocido';
		const height = hero.appearance.height[1] || 'N/A';
		const weight = hero.appearance.weight[1] || 'N/A';
		const fullName = hero.biography.fullName || hero.name;

		card.className = `group relative h-[400px] w-full overflow-hidden rounded-md border-4 ${borderColor} bg-gray-900 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10`;

		// Rellenar con información y etiquetas HTML
		card.innerHTML = `
            <!-- IMAGEN DE FONDO -->
            <div class="absolute inset-0 h-full w-full">
                <img src="${hero.images.md}" alt="${hero.name}" 
                    class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:opacity-40">
                <!-- Gradiente para que el texto de abajo siempre se lea -->
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
            </div>

            <!-- BADGE DE ALINEACIÓN (Esquina superior derecha) -->
            <div class="absolute top-4 right-4 z-10">
                <span class="${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">
                    ${alignment}
                </span>
            </div>

            <!-- NOMBRE Y DATA PRINCIPAL (Siempre visible abajo) -->
            <div class="absolute bottom-0 left-0 w-full p-6 transition-transform duration-500 transform translate-y-2 group-hover:-translate-y-2">
                
                <!-- Nombre Grande -->
                <h3 class="text-3xl font-black text-white italic drop-shadow-lg uppercase font-sans mb-1">
                    ${hero.name}
                </h3>
                <!-- Nombre Real -->
                <p class="text-acento font-bold text-sm mb-4 opacity-90">
                    ${fullName}
                </p>

                <!-- INFORMACIÓN OCULTA EN DESKTOP -->
                <div class="mt-2 transition-all duration-500 h-auto opacity-100 lg:[@media(hover:hover)]:h-0 lg:[@media(hover:hover)]:opacity-0 lg:group-hover:h-auto lg:group-hover:opacity-100">
                
                <!-- Separador -->
                <div class="h-0.5 w-full ${separatorColor} mb-4 rounded-full shadow-[0_0_10px_currentColor]"></div>
                
                    <!-- Grid de Estadísticas -->
                    <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-200">
                        
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-400 uppercase font-bold">Raza</span>
                            <span>${race}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-400 uppercase font-bold">Editor</span>
                            <span>${hero.biography.publisher || 'Indie'}</span>
                        </div>
                        
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-400 uppercase font-bold">Altura</span>
                            <span>${height}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-400 uppercase font-bold">Peso</span>
                            <span>${weight}</span>
                        </div>

                    </div>

                    <!-- Botón "Ver más" -->
                    <button class="mt-4 w-full py-2 bg-comic-pink/80 hover:bg-comic-pink text-white font-bold rounded uppercase text-xs border border-comic-pink tracking-widest transition-colors backdrop-blur-sm active:scale-95">
                        Ver Ficha Completa
                    </button>
                </div>
            </div>
        `;

        // Captura del botón
		const $btnDetails = card.querySelector('button');

		// Listener
		$btnDetails.addEventListener('click', () => {
			openModal(hero); 
		});

		// Agregar cada card al contenedor padre
		$conteiner.appendChild(card);
	});
};
