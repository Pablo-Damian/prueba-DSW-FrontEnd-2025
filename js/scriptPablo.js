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

    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Se comprueba la existencia del botón para evitar errores en futuras
    // páginas que quizás no lo incluyan
    if (themeToggleButton) {
        const themeToggleIcon = document.getElementById('theme-toggle-icon');
        
        // Al cargar la página, se lee la preferencia guardada en localStorage
        const currentTheme = localStorage.getItem('theme');
        
        // Si el tema guardado es 'dark', se aplica la clase y el "ícono" correspondiente
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleIcon.src = 'img/pablo/modo-claro.png';
        }

        // Se asigna el evento 'click' del botón
        themeToggleButton.addEventListener('click', () => {
            // Alterna la clase 'dark-mode' en el body
            document.body.classList.toggle('dark-mode');

            // Se actualiza el ícono y se guarda la nueva preferencia en localStorage
            if (document.body.classList.contains('dark-mode')) {
                themeToggleIcon.src = 'img/pablo/modo-claro.png';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleIcon.src = 'img/pablo/modo-oscuro.png';
                localStorage.setItem('theme', 'light');
            }
        });
    }
});