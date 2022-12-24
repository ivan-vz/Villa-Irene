import productos from '../JSON/productos.json' assert { type: 'json' };

window.mostrarModal = mostrarModal;

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

let mostrarProductos = () => {
    let cuerpo = document.getElementById("variosDulces");
    console.log(productos);
    productos['varios-dulces'].forEach((dulce) => {
        cuerpo.innerHTML += `
        <div class="card col my-3" style="width: 18rem; cursor: pointer;" data-toggle="modal" data-target="#${dulce.nombre}" onclick="mostrarModal('${dulce.nombre}')">
            <img class="card-img-top mt-2" src="${dulce.img[0]}" alt="Card image cap">
            <div class="card-body text-center">
                <h5 class="card-title">${dulce.nombre}</h5>
            </div>
        </div>

        <div class="modal fade" id="${dulce.nombre}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${dulce.nombre}</h5>
                    </div>
                    <div class="modal-body">
                        <div></div>
                        <div>
                            ${dulce.desripcion}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}

function mostrarModal(id) {
    let modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
};