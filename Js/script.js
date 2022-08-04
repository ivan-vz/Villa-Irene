let accord = document.getElementsByClassName("accordion"); // Genera un arreglo con todos los elementos que tengan una clase llamada "accordion"

for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function() { // This es como na abreviacion para hablar de accord o un objeto, es como cuando usamos "el" en vez de repetir el nombre  
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) { // .style es para modificar el "css" de un elemento sn afectar al resto
      panel.style.maxHeight = null; // maxHeight = null, al darle un valor nulo a la altura maxima del panel es como si se usa display: none en css
    } else {
      panel.style.maxHeight = panel.scrollHeight + "vh"; //.scrollheight es la altura de un objeto incluyendo el padding pero excluyendo el margen, borde, etc
    }  //la funcion lo que hace es que si el acordeon esta abierto lo cierra (al hacerle click) o viceversa
  });
}