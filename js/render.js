// Nodo del dom
const $conteiner = document.getElementById('results-container');

// Función para renderizar los resultados de la api
export const renderHeros = (results) => {
    // Limpiar el contenedor antes de renderizar la nueva página
    $conteiner.innerHTML = '';

    // Recorrer el array de resultados con un forEach
    results.forEach((res) => {
        // Por cada elemento, crear un article
        const card = document.createElement('article');
        // Rellenar con información y etiquetas HTML
        card.innerHTML = `
            <div class="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-md shadow-md hover:shadow-amber-400 border border-b-4 border-comic-pink transition-transform hover:scale-105 active:scale-95 group">
                <img src="${res.images.sm}" alt="${res.name}"
                    class="w-16 h-16 rounded-full border-2 border-comic-pink object-cover">
                <div>
                    <h4 class="text-gray-800 dark:text-white font-bold text-lg">${res.name}</h4>
                    <p class="text-comic-pink text-sm">${res.appearance.gender}</p>
                </div>
            </div>`;

        // Agregar cada card al contenedor padre
        $conteiner.appendChild(card);
    });
};