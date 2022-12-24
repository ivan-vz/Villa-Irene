let accord = document.getElementsByClassName("accordion"); // Genera un arreglo con todos los elementos que tengan una clase llamada "accordion"

for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () { // This es como na abreviacion para hablar de accord o un objeto, es como cuando usamos "el" en vez de repetir el nombre  
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) { // .style es para modificar el "css" de un elemento sn afectar al resto
      panel.style.maxHeight = null; // maxHeight = null, al darle un valor nulo a la altura maxima del panel es como si se usa display: none en css
    } else {
      panel.style.maxHeight = panel.scrollHeight + "vh"; //.scrollheight es la altura de un objeto incluyendo el padding pero excluyendo el margen, borde, etc
    }  //la funcion lo que hace es que si el acordeon esta abierto lo cierra (al hacerle click) o viceversa
  });
}

// Iconos del incicio

const nosotrosOContactos = (tipoInfo) => {
  let divNosotros = document.getElementById("infoNosotros");
  let divContactos = document.getElementById("infoContactos");
  switch (tipoInfo) {
    case "Nosotros": {
      if (!divContactos.classList.contains('d-none')) {
        divContactos.classList.add("desaparecer");
        setTimeout(() => {
          divContactos.classList.add("noOpacidad");
          divContactos.classList.add("d-none");
          divContactos.classList.remove("desaparecer");

          divNosotros.classList.remove("d-none");
          divNosotros.classList.add("aparecer");
          setTimeout(() => {
            divNosotros.classList.remove("noOpacidad");
            divNosotros.classList.remove("aparecer");
          }, 1000);
        }, 1000);
      } else {

        divNosotros.classList.remove("d-none");
        divNosotros.classList.add("aparecer");
        setTimeout(() => {
          divNosotros.classList.remove("noOpacidad");
          divNosotros.classList.remove("aparecer");
        }, 1000);
      }
      window.location = "#iconosNC";
      break;
    }
    case "Contactos": {
      if (!divNosotros.classList.contains('d-none')) {
        divNosotros.classList.add("desaparecer");
        setTimeout(() => {
          divNosotros.classList.add("noOpacidad");
          divNosotros.classList.add("d-none");
          divNosotros.classList.remove("desaparecer");

          divContactos.classList.remove("d-none");
          divContactos.classList.add("aparecer");
          setTimeout(() => {
            divContactos.classList.remove("noOpacidad");
            divContactos.classList.remove("aparecer");
          }, 1000);
        }, 1000);
      } else {
        divContactos.classList.remove("d-none");
        divContactos.classList.add("aparecer");
        setTimeout(() => {
          divContactos.classList.remove("noOpacidad");
          divContactos.classList.remove("aparecer");
        }, 1000);
      }
      window.location = "#iconosNC";
      break;
    }
  }
}