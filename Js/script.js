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