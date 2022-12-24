import productos from '../JSON/productos.json' assert { type: 'json' };

window.mostrarModal = mostrarModal;

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

let mostrarProductos = () => {
    let cuerpo = document.getElementById("variosDulces");
    productos['varios-dulces'].forEach((dulce) => {

        let cont = 0;
        let parteInicial= "";
        let fotosCarousel = "";
        let parteFinal = "";

        parteInicial= `
        <div class="card col my-3" style="width: 18rem; cursor: pointer;" data-bs-toggle="modal"
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
            <img src="${dulce.img[0]}" style="width: 30em; height: 20em;" class="d-block" alt="${dulce.nombre}">
        </div>
        `
        for(let i = 1; i < dulce.img.length; i++){
            fotosCarousel += `
            <div class="carousel-item">
                <img src="${dulce.img[i]}" style="width: 30em; height: 20em;" class="d-block" alt="${dulce.nombre}">
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
    })
}

function mostrarModal(id) {
    let modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
};