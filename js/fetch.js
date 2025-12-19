// Guardado en variable de la url de la api
const url = `https://akabab.github.io/superhero-api/api/all.json`;

// Creacíon de una función asincrona para fetch
export const getAllHeros = async () => {
    // Bloque tryCatch para manejo de respuestas exitosas y erroneas
    try {
        // Guardar la respuesta del fetch en una variable
        const response = await fetch(url);

        // Validar status de respuesta, si es erroneo generar un Error con msj
        if (!response.ok) {
            throw new Error('No se ha obtenido respuesta');
        }

        // Si todo esta ok, se formatea la respuesta del fetch y se la guarda en una variable
        const data = await response.json();
        // ver si la API devuelve array directo o un objeto con .results
        return Array.isArray(data) ? data : data.results;
        
    } catch (error) {
        // Manejo de errores
        console.error(`Error: ${error.message}`);
        return []; // Retornar array vacío si falla para no romper el código
    }
};