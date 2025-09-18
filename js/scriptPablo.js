/*
    Funcionalidad: Theming (Modo Claro/Oscuro).
    - Objetivo: Cumplir con el requisito de una función dinámica implementada en JavaScript
    - Mecanismo: Utiliza 'localStorage' para garantizar la persistencia del tema
      seleccionado por el usuario a través de sesiones y navegación entre páginas
    - Implementación: El script se ejecuta en el evento 'DOMContentLoaded' para asegurar
      que el DOM esté completamente cargado y se manipula el 'body' del documento
      añadiendo/quitando la clase 'dark-mode', permitiendo que el CSS aplique los
      estilos correspondientes de forma reactiva
*/
document.addEventListener('DOMContentLoaded', () => {

    // --- SECCIÓN 1: LÓGICA DEL MODO CLARO/OSCURO ---
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        const themeToggleIcon = document.getElementById('theme-toggle-icon');
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleIcon.src = 'img/pablo/modo-claro.png';
        }
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggleIcon.src = 'img/pablo/modo-claro.png';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleIcon.src = 'img/pablo/modo-oscuro.png';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- SECCIÓN 2: LÓGICA PARA INTERACCIÓN TÁCTIL DE LA TARJETA ---
    /*
        Profesor:
        Se añade esta lógica para mejorar la UX en dispositivos táctiles, donde no
        existe el evento ':hover'. Se gestiona el giro de la tarjeta manualmente.
    */
    const flipper = document.querySelector('.image-flipper');
    if (flipper) {
        flipper.addEventListener('click', (event) => {
            // Comprueba si la tarjeta ya está girada.
            const isFlipped = flipper.classList.contains('is-flipped');
            
            // Si no está girada, se ejecuta la lógica del primer toque.
            if (!isFlipped) {
                // 'event.preventDefault()' es crucial: cancela la acción por
                // defecto del enlace (abrir la URL), permitiendo el giro.
                event.preventDefault();
                
                // Añade la clase que dispara la animación de giro en CSS.
                flipper.classList.add('is-flipped');
            }
            // Si la tarjeta ya estaba girada, no se hace nada aquí,
            // permitiendo que el evento 'click' del enlace funcione normalmente.
        });

        // Event listener para volver a girar la tarjeta si se toca fuera de ella.
        document.addEventListener('click', (event) => {
            // Si el elemento clickeado NO es la tarjeta ni está dentro de ella...
            if (!flipper.contains(event.target)) {
                // ...se quita la clase para que vuelva a su estado original.
                flipper.classList.remove('is-flipped');
            }
        });
    }
});