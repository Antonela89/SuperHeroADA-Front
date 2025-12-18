// Importación de función de renderización
import { renderHeros } from './render.js';

// Elementos del DOM
const $btnPrev = document.getElementById('btn-prev');
const $btnNext = document.getElementById('btn-next');
const $pagina = document.getElementById('pagina');
const $infoPaginado = document.getElementById('info-paginado');

// Estado local
let heros = [];
let currentPage = 1;
const itemsPerPage = 20;

// Función para inicializar los datos en este módulo
export const setHerosData = (data) => {
    heros = data; // Guardar los resultados en la variable local
    currentPage = 1; // Resetear a la página 1 cuando llegan nuevos datos
    updatePage(); // Renderizar la primera vez
};

// Lógica principal de paginado
const updatePage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const herosShow = heros.slice(startIndex, endIndex);

    renderHeros(herosShow); // Llamar a la función render
    updateUI(); // Llamar a la función updateUI
};

// Función auxiliar para actualzizar información de botones y paginado
const updateUI = () => {
    $pagina.textContent = currentPage;
    const totalPages = Math.ceil(heros.length / itemsPerPage);

    $infoPaginado.textContent = `Mostrando página ${currentPage} de ${totalPages} (Total Heroes: ${heros.length})`;

    $btnPrev.disabled = currentPage === 1;
    $btnNext.disabled = currentPage === totalPages;
};

// Inicializar eventos (se llama una vez desde main)
export const initPaginationListeners = () => {
    $btnPrev.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    $btnNext.addEventListener('click', () => {
        const totalPages = Math.ceil(heros.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updatePage();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
};