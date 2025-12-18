// Importación de paginado
import { setHerosData } from "./paginated.js";

// Nodos del DOM
const $form = document.getElementById('search-form');
const $heroName = document.getElementById('hero-name');
const $sort = document.getElementById('sort-select');

// Variable local para guardar copia de la busqueda
let originalHeros = [];

export const initFilters = (data) => {
    // Guardar la info original
    originalHeros = data;

    // Listener de formulario -> evento submit
    $form.addEventListener('submit', (e) => {
        // Evitar que la página recargue
        e.preventDefault();
        // LLamar a función auxilar 
        applyFilters();
    })
}

const applyFilters = () => {
    // Capturar datos
    const query = $heroName.value.toLowerCase().trim();
    const order = $sort.value;

    // Filtrar
    let filteredHeros = originalHeros.filter(hero => hero.name.toLowerCase().includes(query));

    // Ordenar
    filteredHeros.sort((a,b) => {
        if (order === "az") {
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)
        }
    });

    // Actualizar vista
    setHerosData(filteredHeros);
}




