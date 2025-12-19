# Trabajo Práctico Integrador

## Buscador de Superhéroes

### Consigna
En este proyecto vas a crear una aplicación que permita **listar superhéroes y obtener información sobre los mismos**. Para eso utilizarás una **API REST gratuita** con datos reales, realizarás consultas a la misma pasándole distintos parámetros que permitan personalizar la búsqueda, y mostrarás los datos obtenidos como respuesta.

---

### Ejemplo
Puedes ver un ejemplo funcional del proyecto siguiendo este link (acá puedes poner el link al deploy cuando lo tengas listo, ten en cuenta que este ejemplo está realizado con otra api):
[https://frontend-proyecto-comics.adaitw.org](https://frontend-proyecto-comics.adaitw.org)

---

### Criterios de aceptación
Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

✅ Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes e íconos.
✅ Debe ser responsive.
✅ Debe cumplir con las funcionalidades principales listadas en la sección siguiente.
✅ Debe hacer uso de un preprocesador CSS (como SASS o SCSS).
✅ Debe estar deployado y ser accesible desde una dirección web.
✅ No se debe trabajar en la rama `main`. En `main` sólo van a mergearse las demás ramas, por lo que cada commit de `main` debería ser el merge de una branch de una funcionalidad terminada.
✅ Cada funcionalidad que se agregue debe hacerse mediante un PR (Pull Request).

---

### Funcionalidades principales

-   **Se debe poder realizar una búsqueda de superhéroes por nombre.**
-   **Se debe poder ordenar los resultados alfabéticamente**, en orden ascendente y descendente (se realiza desde el frontend).
-   ** Al clickear en un personaje, se debe mostrar su información completa**, incluyendo:
    *   Imagen
    *   Nombre
    *   Nombre real
    *   Editorial (Marvel / DC / etc.)
    *   Descripción / Biografía (alias, lugar de nacimiento, ocupación)
    *   Estadísticas de poder (fuerza, velocidad, inteligencia, combate, etc.)
    *   Altura y peso
    *   Conexiones o afiliaciones
-   **Se debe mostrar el total de resultados en las búsquedas.**
-   **Debe contar con un paginado:**
    *   Se debe mostrar 20 resultados por página.
    *   Se debe poder ir a la primera página.
    *   Se debe poder ir a la última página.
    *   Se debe poder ir a la página siguiente.
    *   Se debe poder ir a la página anterior.
    *   Se deben **deshabilitar los botones** correspondientes cuando no puedan ser utilizados (por ejemplo, si se está en la última página, no se debe poder avanzar más).

---

### Desafíos extra (opcionales)
*   Agregar la cantidad de páginas y la página actual en el paginado.
*   Agregar la posibilidad de ir a una página específica (mediante un `select` o `input`).
*   Cuando se realiza una búsqueda y luego se clickea en un personaje para ver los detalles, perdemos la búsqueda realizada y la página en la que estábamos. Agregar un botón que permita **volver a la página exacta de la última búsqueda**.
*   Agregar **modo oscuro**.

---

### Criterios de evaluación

| Nota | Requisitos                                                              |
| :--- | :---------------------------------------------------------------------- |
| < 6  | No aprobado                                                             |
| 6    | Respeta la consigna, el diseño, el funcionamiento, y es responsive      |
| 7    | HTML semántico, buen código, nombres adecuados, uso de variables en SASS |
| 8    | Buena estructura, estilos anidados en SASS, ramas con nombres adecuados |
| 9    | Componentización de estilos, funciones pequeñas, lógica clara, datos separados |
| 10   | Reutilización de funciones, buenos commits, un PR por funcionalidad con títulos |

---

### SuperHero API

La API que vamos a utilizar para este proyecto es la **SuperHero API**.

####  Registro
Debes ingresar a [https://akabab.github.io/superhero-api/api/](https://akabab.github.io/superhero-api/api/)

#### Cómo usarla
Para buscar todos los personajes:
`https://akabab.github.io/superhero-api/api/all.json`

#### Qué datos devuelve
*   Nombre y nombre real
*   Imagen
*   Editorial (DC, Marvel, etc.)
*   Biografía (ocupación, lugar de nacimiento, alias)
*   Estadísticas (fuerza, velocidad, inteligencia, combate, etc.)
*   Altura y peso
*   Conexiones (afiliaciones)

---

### CORS
No requiere configuración extra para evitar problemas de CORS. Funciona perfecto con **Live Server de VSCode**.

---

# SuperHero ADA - Buscador de Héroes

Una aplicación web interactiva para buscar, filtrar y explorar el universo de superhéroes. Este proyecto consume la [SuperHero API](https://akabab.github.io/superhero-api/api/) y presenta los datos con una estética única estilo **Cómic/Cyberpunk**, optimizada para todos los dispositivos.

## Funcionalidades Principales

### Búsqueda y Filtrado
- **Buscador en tiempo real:** Permite encontrar héroes por nombre.
- **Ordenamiento:** Capacidad de ordenar los resultados de forma Ascendente (A-Z) y Descendente (Z-A).
- **Feedback Visual:** Loader animado estilo cómic ("KA-POW!") durante la espera de resultados.

### Paginación Avanzada
- Visualización de **20 resultados por página**.
- Controles completos de navegación:
  - `<<` Ir al principio.
  - `<` Anterior.
  - `>` Siguiente.
  - `>>` Ir al final.
- **Selector de Página:** Un `select` dinámico permite saltar a cualquier página específica.
- **Barra de Estado (HUD):** Indicador visual de la página actual y el total de héroes encontrados.
- **Validación:** Los botones se deshabilitan visual y funcionalmente cuando no hay más páginas.

### Tarjetas de Héroes (Cards)
- **Diseño Interactivo:** Efectos de zoom y brillo al pasar el mouse.
- **Alineación Temática:** El borde y los indicadores cambian de color según el bando del personaje:
  - **Good:** Cyan.
  - **Bad:** Fucsia.
  - **Neutral:** Amber.
- **Lógica Responsive (Touch-Friendly):**
  - En **Desktop**: La información técnica aparece al hacer *hover*.
  - En **Móvil/Tablet**: La información está siempre visible para facilitar la lectura sin mouse.

### Ficha Técnica (Modal)
- Visualización detallada sin recargar la página.
- **Diseño Adaptativo:**
  - **Móvil:** Diseño vertical con scroll.
  - **Desktop:** Diseño de 3 columnas (Poster | Bio | Stats) aprovechando pantallas anchas.
- **Estadísticas Visuales:** Barras de poder y tarjetas de atributos con iconos temáticos.

### UI/UX y Estética
- **Dark Mode:** Soporte completo para tema claro y oscuro con persistencia en `localStorage`.
- **Cursores Personalizados:** Puntero de precisión y mira telescópica que reacciona a los elementos interactivos (Solo en PC).
- **Animaciones:** Uso de Tailwind CSS y animaciones custom (`animate-bounce`, `comic-pop`, `shockwave`).

---

## Tecnologías Utilizadas

*   **HTML5 Semántico:** Estructura optimizada y accesible (`aria-labels`).
*   **CSS3 & Tailwind CSS:** Estilizado mediante clases utilitarias y variables CSS personalizadas (`--primary`, `--accent`) para el manejo de temas.
*   **JavaScript (ES6 Modules):** Código modular dividido en responsabilidades únicas:
    *   `main.js`: Punto de entrada.
    *   `fetch.js`: Comunicación con la API.
    *   `render.js`: Creación del DOM para las tarjetas.
    *   `paginated.js`: Lógica de paginación.
    *   `modal.js`: Control de la ventana modal.
    *   `filters.js`: Lógica de búsqueda y orden.
    *   `loader.js`: Animaciones de carga.
    *   `cursor.js`: Lógica del puntero personalizado.
    *   `dark-mode.js`: Gestión del tema visual.
*   **FontAwesome:** Iconografía vectorial.

---

## Estructura del Proyecto

```text
SUPERHEROADA-FRONT/
│
├── assets/
│   └── banner.webp       # Imágen optimizada de fondo
│
├── css/
│   └── styles.css        # Configuraciones custom, animaciones y scrollbars
│
├── js/
│   ├── cursor.js         # Efecto de cursor y mira
│   ├── dark-mode.js      # Lógica Claro/Oscuro
│   ├── fetch.js          # Llamada a la API
│   ├── filters.js        # Lógica de búsqueda
│   ├── loader.js         # Animación "KA-POW"
│   ├── main.js           # Orquestador principal
│   ├── modal.js          # Lógica de la ficha técnica
│   ├── paginated.js      # Control de páginas
│   └── render.js         # Generador de HTML (Cards)
│
├── index.html            # Estructura principal
└── README.md             # Documentación
```

---

## Instalación y Uso

Dado que el proyecto utiliza **ES Modules** (`type="module"` en los scripts), es necesario ejecutarlo a través de un servidor local para evitar errores de CORS.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/TU_USUARIO/superhero-ada.git
    ```
2.  **Abrir con VS Code:**
    ```bash
    code superhero-ada
    ```
3.  **Ejecutar con Live Server:**
    *   Instala la extensión "Live Server" en VS Code.
    *   Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

---

## Desafíos Implementados

Este proyecto cumple con los requisitos obligatorios y los desafíos opcionales propuestos:

*   ✅ **Paginado funcional:** 20 items por página con navegación completa.
*   ✅ **Estados de botones:** Deshabilitados correctamente en la primera/última página.
*   ✅ **Total de páginas:** Indicador visual "Página X de Y".
*   ✅ **Ir a página específica:** Implementado mediante un `<select>` dinámico.
*   ✅ **Persistencia de búsqueda:** Al usar un sistema de **Modal** en lugar de navegar a otra URL, la búsqueda y la página actual se mantienen intactas al cerrar la ficha del personaje.

---

## Autor

**Antonela Borgogno**
*   Carrera: FrontEnd - ADA ITW
*   Módulo: 3
