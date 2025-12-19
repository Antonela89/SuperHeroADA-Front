// Importación de función de renderización
import { renderHeros } from './render.js';

// Elementos del DOM
const $btnFirst = document.getElementById('btn-first');
const $btnPrev = document.getElementById('btn-prev');
const $btnNext = document.getElementById('btn-next');
const $btnLast = document.getElementById('btn-last');
const $selectPages = document.getElementById('select-pages');
const $totalPagesText = document.getElementById('total-pages-text');
const $infoPaginado = document.getElementById('info-paginado');

// Estado local
let heros = [];
let currentPage = 1;
const itemsPerPage = 20;

// Función para inicializar los datos en este módulo
export const setHerosData = (data) => {
	heros = data; // Guardar los resultados en la variable local
	currentPage = 1; // Resetear a la página 1 cuando llegan nuevos datos

	// Manejar array vacío
	if (heros.length === 0) {
		// mensaje al usuario
		document.getElementById('results-container').innerHTML =
			'<i class="fa-solid fa-thumbs-down"></i><p class="col-span-full text-center text-xl font-bold mt-10">No se encontraron superhéroes</p>';

		// Actualizar UI para que diga "Página 1 de 0 y deshabilitar"
		updateUI();
		return; // cortar proceso
	}

	// Generar las paginas para seleccionar
	generatePageOptions();

	// Renderizar la primera vez
	updatePage();
};

// Lógica principal de paginado
const updatePage = () => {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const herosShow = heros.slice(startIndex, endIndex);

	renderHeros(herosShow); // Llamar a la función render
	updateUI(); // Llamar a la función updateUI
};

// Función para rellenar el <select>
const generatePageOptions = () => {
	const totalPages = Math.ceil(heros.length / itemsPerPage) || 1;
	$selectPages.innerHTML = ''; // Limpiar opciones previas

	for (let i = 1; i <= totalPages; i++) {
		const option = document.createElement('option');
		option.value = i;
		option.textContent = i;
		$selectPages.appendChild(option);
	}
};

// Función auxiliar para actualzizar información de botones y paginado
const updateUI = () => {
	const totalPages = Math.ceil(heros.length / itemsPerPage) || 1;

	// Actualizar textos
	$totalPagesText.textContent = `de ${totalPages}`;
	$selectPages.value = currentPage; // Sincronizar el select con la página actual
	$infoPaginado.innerHTML = `
    <div class="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-8 py-3 rounded-full bg-superficie border-2 border-acento shadow-[0_0_15px_rgba(251,191,36,0.3)] backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
        
        <!-- Parte 1: Página Actual -->
        <div class="flex items-baseline gap-2">
            <i class="fa-solid fa-layer-group text-comic-pink text-lg"></i>
            <span class="text-sm font-bold text-texto uppercase tracking-widest">Página</span>
            <span class="text-2xl font-black text-white leading-none">${currentPage}</span>
            <span class="text-xs font-bold text-texto opacity-50">de ${totalPages}</span>
        </div>

        <!-- Separador (visible solo en PC) -->
        <div class="hidden sm:block w-px h-6 bg-white/20"></div>

        <!-- Parte 2: Total de Héroes -->
        <div class="flex items-center gap-2">
            <i class="fa-solid fa-mask text-acento text-lg"></i>
            <span class="text-sm font-bold text-texto uppercase tracking-widest">Héroes:</span>
            <span class="text-xl font-black text-acento">${heros.length}</span>
        </div>

    </div>`;

	// Deshabilitar/Habilitar botones
	// Si estamos en página 1, deshabilitamos "Anterior" y "Primero"
	$btnPrev.disabled = currentPage === 1;
	$btnPrev.classList.remove('hover')
	$btnFirst.disabled = currentPage === 1;


	// Si estamos en la última, deshabilitamos "Siguiente" y "Último"
	$btnNext.disabled = currentPage === totalPages || totalPages === 0;
	$btnLast.disabled = currentPage === totalPages || totalPages === 0;
};

// Inicializar eventos (se llama una vez desde main)
export const initPaginationListeners = () => {
	const totalPages = () => Math.ceil(heros.length / itemsPerPage);

	// ANTERIOR
	$btnPrev.addEventListener('click', () => {
		if (currentPage > 1) {
			currentPage--;
			updatePage();
			scrollToTop();
		}
	});

	// SIGUIENTE
	$btnNext.addEventListener('click', () => {
		if (currentPage < totalPages()) {
			currentPage++;
			updatePage();
			scrollToTop();
		}
	});

	// PRIMERO (<<)
	$btnFirst.addEventListener('click', () => {
		if (currentPage !== 1) {
			currentPage = 1;
			updatePage();
			scrollToTop();
		}
	});

	// ÚLTIMO (>>)
	$btnLast.addEventListener('click', () => {
		if (currentPage !== totalPages()) {
			currentPage = totalPages();
			updatePage();
			scrollToTop();
		}
	});

	// SELECTOR DE PÁGINA (Ir a...)
	$selectPages.addEventListener('change', (e) => {
		const selectedPage = Number(e.target.value);
		currentPage = selectedPage;
		updatePage();
		scrollToTop();
	});
};

// Función auxiliar para subir suavemente al inicio de los resultados
const scrollToTop = () => {
	const resultsSection = document.getElementById('main-content');
	if (resultsSection) {
		resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
};
