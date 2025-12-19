export const initDarkMode = () => {
    // Elementos del dom
    const $html = document.documentElement;
    const $themeToggleBtn = document.getElementById('theme-toggle');
    const $themeIcon = document.getElementById('theme-icon');

    // Función auxiliar para cambiar el icono
    const updateThemeIcon = (isDark) => {
        if ($themeIcon) {
            $themeIcon.innerHTML = isDark
                ? `<i class="fa-solid fa-sun text-comic-pink group-hover:text-acento"></i>` // Icono sol cuando es oscuro (para pasar a claro)
                : `<i class="fa-solid fa-moon text-comic-pink group-hover:text-acento"></i>`; // Icono luna cuando es claro (para pasar a oscuro)
        }
    };

    // Verificar preferencia guardada AL CARGAR
    const savedTheme = localStorage.getItem('theme');
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Opcional: detectar sistema

    // Aplicar tema inicial
    if (savedTheme === 'dark' || (!savedTheme && isSystemDark)) {
        $html.classList.add('dark');
        updateThemeIcon(true); 
    } else {
        $html.classList.remove('dark');
        updateThemeIcon(false);
    }

    // Event Listener
    if ($themeToggleBtn) {
        $themeToggleBtn.addEventListener('click', () => {
            $html.classList.toggle('dark');
            const isDark = $html.classList.contains('dark');

            // Guardar preferencia
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            // Actualizar icono
            updateThemeIcon(isDark);
        });
    }
};