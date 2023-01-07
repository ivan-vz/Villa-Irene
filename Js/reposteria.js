import productos from '../JSON/productos.json' assert { type: 'json' };

window.mostrarModal = mostrarModal;
window.expandirFoto = expandirFoto;

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

let mostrarProductos = () => {
    let cuerpo = document.getElementById("variosDulces");
    let tortasMiniaturas = document.getElementById("tortasMiniatras");
    let i = 0;

    productos['varios_Dulces'].forEach((dulce) => {
        let parteInicial = "";
        let fotosCarousel = "";
        let parteFinal = "";

        parteInicial = `
        <div class="card col my-3" style="width: 18em; cursor: pointer;" data-bs-toggle="modal"
            onclick="mostrarModal('${dulce.nombre}1')">
            <img class="card-img-top mt-2" src="${dulce.img[0]}" alt="Card image cap">
            <div class="card-body text-center">
            <h5 class="card-title">${dulce.nombre}</h5>
            </div>
        </div>
    
        <div class="modal fade" id="${dulce.nombre}1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
            
                    <div class="modal-header">
                        <div id="${dulce.nombre}2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                
        `

        fotosCarousel += `
        <div class="carousel-item active">
            <img src="${dulce.img[0]}" style="width: 29em; height: 20em;" class="d-block" alt="${dulce.nombre}">
        </div>
        `
        for (let i = 1; i < dulce.img.length; i++) {
            fotosCarousel += `
            <div class="carousel-item">
                <img src="${dulce.img[i]}" style="width: 29em; height: 20em;" class="d-block" alt="${dulce.nombre}">
            </div>
            `
        }
        parteFinal = `
                    </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${dulce.nombre}2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${dulce.nombre}2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="modal-body">
                    <div>
                        <h5 class="modal-title">${dulce.nombre}</h5>
                    </div>
                    <div>
                        ${dulce.desripcion}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
        `

        cuerpo.innerHTML += parteInicial + fotosCarousel + parteFinal;
    });

    productos['tortas']['ejemplares'].forEach((torta) => {
        tortasMiniaturas.innerHTML += `
        <div class="row justify-content-center my-3">
            <img id="torta${i}" src="${torta[0]}" class="img-thumbnail" style="width: 5em; cursor: pointer" alt="torta${i}" onclick="expandirFoto('${torta}')">
        </div>
        `
        i++;
    });
}

function mostrarModal(id) {
    let modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
};

function expandirFoto(src) {
    src = src.split(",");
    console.log(src);
    let tortasExtenidas = document.getElementById("tortasExtenidas");

    let inicialExtendidas = "";
    let fotosExtendidas = "";
    let finalExtendidas = "";

    inicialExtendidas = `
        <div id="fotosExtendidas" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">                       
        `

        fotosExtendidas += `
        <div class="carousel-item active" style="width: 25em; height: 30em;">
            <img src="${src[0]}" style="width: 100%; height: 100%; object-fit: fill;" alt="torta0">
        </div>
        `
    for (let i = 1; i < src.length; i++) {
        fotosExtendidas += `
            <div class="carousel-item" style="width: 25em; height: 30em;">
                <img src="${src[i]}" style="width: 100%; height: 100%; object-fit: fill;" alt="torta${i}">
            </div>
            `
    }
    finalExtendidas = `
        </div>
            <button class="carousel-control-prev" type="button" style="margin-left: -4em;" data-bs-target="#fotosExtendidas" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" style="margin-right: 5em;" data-bs-target="#fotosExtendidas" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
    </div>
        `

    tortasExtenidas.innerHTML = inicialExtendidas + fotosExtendidas + finalExtendidas;

}