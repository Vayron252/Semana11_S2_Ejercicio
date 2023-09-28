//Seleccionamos al elemento que se le insertará HTML
const divmiejemplo = document.querySelector('#miejemplo');
for (let i = 1; i <= 3; i++) {
    let subtitulo = document.createElement('div');
    subtitulo.classList.add('subheading','mb-1');
    subtitulo.setAttribute('id', `${i}`);
    subtitulo.textContent = `Ejemplo desde el app.js => Elemento - ${i}`;
    divmiejemplo.appendChild(subtitulo);
}
