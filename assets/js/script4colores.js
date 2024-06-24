// Función para cambiar el color a negro
function cambiarColorANegro(idDiv) {
    document.getElementById(idDiv).style.backgroundColor = 'black';
}

// Agregar el evento de clic en los div
document.getElementById('div1').addEventListener('click', function() { cambiarColorANegro('div1'); });
document.getElementById('div2').addEventListener('click', function() { cambiarColorANegro('div2'); });
document.getElementById('div3').addEventListener('click', function() { cambiarColorANegro('div3'); });
document.getElementById('div4').addEventListener('click', function() { cambiarColorANegro('div4'); });


// Variable para guardar el color, no sé si es mejor en este caso ponerle var en vez de let, aunque el código em sirvió con let, var y const
let colorActual = '';


// Función para crear un nuevo div
function crearNuevoDiv(color) {
    const contenedor = document.getElementById("contenedor");
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('tamDiv'); // esto es para que tenga el tamaño de los div definidos en el css
    nuevoDiv.style.backgroundColor = color;
    contenedor.appendChild(nuevoDiv);
}

// loq ue sucede al presionar teclas
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorActual = 'pink';
        document.querySelector('#key').style.backgroundColor = colorActual;
    } else if (event.key === 's') {
        colorActual = 'orange';
        document.querySelector('#key').style.backgroundColor = colorActual;
    } else if (event.key === 'd') {
        colorActual = 'lightblue';
        document.querySelector('#key').style.backgroundColor = colorActual;
    } else if (event.key === 'q') {
        crearNuevoDiv('red');
    } else if (event.key === 'w') {
        crearNuevoDiv('gray');
    } else if (event.key === 'e') {
        crearNuevoDiv('brown');
    }
});

