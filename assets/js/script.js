// Original
// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


// No entendí realmente lo que pide el 2.2 al decir que el elemento no tenga que ser seleccionado nuevamente así que pongo la función como parámetro comprendiendo que se pide que sea función anónima. 
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }
const ele = document.getElementById("ele1");

ele.addEventListener("click", function() {
  pintar(ele, 'yellow');
});

