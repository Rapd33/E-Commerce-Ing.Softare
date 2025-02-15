const productosCarro = JSON.parse(localStorage.getItem("productosCarro"));

const containerVacio = document.querySelector("#carro-vacio");
const containerCarroProductos = document.querySelector("#carro-productos");
const carroAcciones = document.querySelector("#carro-acciones");
let botonesEliminarCarro = document.querySelectorAll(".boton-eliminar");
const botonVaciarCarro = document.querySelector("#boton-vaciar");
const totalCarro = document.querySelector("#total");
const botonFinalizarCompra = document.querySelector("#boton-comprar");

// Funcion para cargar y agregar los productos en el carro
function cargarProductosCarro () {

    if (productosCarro && productosCarro.length > 0) {

        containerVacio.classList.add("disabled");
        containerCarroProductos.classList.remove("disabled");
        carroAcciones.classList.remove("disabled");

        containerCarroProductos.innerHTML = "";

        productosCarro.forEach((productos) => {

            const div = document.createElement("div");
            div.classList.add("carro-producto");
            div.innerHTML = `
                    <img class="imagen-carro" src="${productos.imagen}" alt="${productos.titulo}">
                    <div class="carro-producto-titulo">
                        <small>Nombre</small>
                        <h3>${productos.titulo}</h3>
                    </div>
                    <div class="carro-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${productos.cantidad}</p>
                    </div>
                    <div class="carro-producto-precio">
                        <small>Precio</small>
                        <p>$${productos.precio}</p>
                    </div>
                    <div class="carro-producto-total">
                        <small>Total</small>
                        <p>$${productos.precio * productos.cantidad}</p>
                    </div>
                    <button class="boton-eliminar"><i class="bi bi-trash2"></i> Eliminar</button>
                `;

            containerCarroProductos.append(div);

        });

        actualizarEliminarCarro();
        actualizarTotalCarro();

    }
    else {
        containerVacio.classList.remove("disabled");
        containerCarroProductos.classList.add("disabled");
        carroAcciones.classList.add("disabled");
    }
}

cargarProductosCarro();

// Funcion actualizar los botones de eliminar
function actualizarEliminarCarro() {
    botonesEliminarCarro = document.querySelectorAll(".boton-eliminar");
    
    botonesEliminarCarro.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarro);
    });
}

// Funcion para eliminar productos del carro
function eliminarDelCarro(e) {
    let idBoton = e.currentTarget.id
    const index = productosCarro.findIndex(producto => producto.id === idBoton);

    productosCarro.splice(index, 1);
    cargarProductosCarro();

    localStorage.setItem("productosCarro", JSON.stringify(productosCarro));
}

// Funcion para vaciar el carro
botonVaciarCarro.addEventListener("click", vaciarCarro);
function vaciarCarro() {

    productosCarro.length = 0;
    localStorage.setItem("productosCarro", JSON.stringify(productosCarro));
    cargarProductosCarro();

}

//Funcion para actualizar total del carro
function actualizarTotalCarro() {
    const totalDelCarro = productosCarro.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    totalCarro.innerText = `$${totalDelCarro}`;
}

// Funcion para finalizar la compra
botonFinalizarCompra.addEventListener("click", finalizarCompra);
function finalizarCompra() {

    alert("Gracias por tu compra!");
    vaciarCarro();
    
}