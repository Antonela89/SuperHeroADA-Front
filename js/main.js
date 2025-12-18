import { initDarkMode } from './dark-mode.js';
import { getAllHeros } from './fetch.js';
import { setHerosData, initPaginationListeners } from './paginated.js';
import { initFilters } from './filters.js';

document.addEventListener('DOMContentLoaded', async () => {
	// Iniciar el modo oscuro
	initDarkMode();

	// Iniciar los listeners de los botones
	initPaginationListeners();

	// Traer los datos
	const data = await getAllHeros();

	// Pasar al módulo de paginado para que arranque
	if (data.length > 0) {
		// setHerosData(data);
		initFilters(data); 
	}
});
