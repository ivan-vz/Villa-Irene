import productos from '../JSON/productos.json' assert { type: 'json' };

const { tortas, varios_Dulces, ...filtradoSinPasteleria } = productos;
const { combos, bebidas, ...filtradoBizcochos } = filtradoSinPasteleria;
const { bizcochos, panes, tartas, sandwiches, budines, varios_Salados, ...filtradoCombo } = filtradoSinPasteleria;

window.mostrarAcordeon = mostrarAcordeon;

document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes("/Bizcocheria_Rotiseria.html")){
        mostrarAcordeon(filtradoBizcochos, "tableBizc");
    } else {
        mostrarAcordeon(filtradoCombo, "tablaCombos");
    }
});

function mostrarAcordeon (tipos, idDiv){
    let curpoTabla = document.getElementById(idDiv);
    for(const comida in tipos){
        let inicioTabla = "";
        let contenidoTabla = "";
        let finalTabla = "";

        inicioTabla = `
        <div class="accordion-item">
            <h2 class="accordion-header" id="${comida}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#tabla${comida}" aria-expanded="false" aria-controls="flush-collapseThree">
                    ${comida}
                </button>
            </h2>

            <div id="tabla${comida}" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#tableBizc">
            <div class="accordion-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Ilustración</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción/Sabores</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        if(Array.isArray(tipos[comida])){
            tipos[comida].forEach(plato => {
                console.log(plato);
                contenidoTabla += `
                <tr>
                    <th scope="row"><img src="${plato.img[0]}" style="width: 3em;" alt="${plato.nombre}"></th>
                    <td>${plato.nombre}</td>
                    <td><small>${plato.desripcion}</small></td>
                </tr>
                `
            });
        } else {
            for(const sabores in tipos[comida]){
                contenidoTabla += `
                <tr>
                    <th><small class="text-muted">${sabores}</small></th>
                </tr>
                `
                tipos[comida][sabores].forEach(plato => {
                    contenidoTabla += `
                    <tr>
                        <th scope="row"><img src="${plato.img[0]}" style="width: 3em;" alt="${plato.nombre}"></th>
                        <td>${plato.nombre}</td>
                        <td><small>${plato.desripcion}</small></td>
                    </tr>
                    `
                });
            }
        }


        finalTabla = `
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `

        curpoTabla.innerHTML += inicioTabla + contenidoTabla + finalTabla;
    }
};