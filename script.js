const content = document.querySelector('.content');
const dots = document.querySelectorAll('.dot'); // Usa querySelectorAll para seleccionar múltiples elementos

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        let position = i;
        let operation = position * -100/3;

        content.style.transform = `translateX(${operation}%)`;
    })

});