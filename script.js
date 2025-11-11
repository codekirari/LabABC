// Genera un color aleatorio en formato hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cambiarColor(letra) {
    document.getElementById(letra).style.color = getRandomColor();
}

let titulo = document.getElementById("titulo");
titulo.style.color = getRandomColor();