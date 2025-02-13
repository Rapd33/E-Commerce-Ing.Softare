// Producto de la tienda
const productos = [
    // Bolsos
    {
        id: "bolso-01",
        titulo: "Bolso Maricielo",
        imagen: "./Img/Bolsos/bolso 1.jpg",
        descripcion: "Bolso azul con detalles en varios colores",
        categoria: {
            nombre: "Bolsos",
            id: "bolosos"
        },
        precio: 90000
    },
    {
        id: "bolso-02",
        titulo: "Bolso Terra",
        imagen: "./Img/Bolsos/bolso 2.jpg",
        descripcion: "Bolso blanco con detalles en distintos colores",
        categoria: {
            nombre: "Bolsos",
            id: "bolsos"
        },
        precio: 90000
    },
    {
        id: "bolso-03",
        titulo: "Bolso Medi",
        imagen: "./Img/Bolsos/bolso 3.jpg",
        descripcion: "Bolso blanco con detalles en azul y dorado",
        categoria: {
            nombre: "Bolsos",
            id: "abrigos"
        },
        precio: 85000
    },
    {
        id: "bolso-04",
        titulo: "Bolso playa",
        imagen: "./Img/Bolsos/bolso 4.jpg",
        descripcion: "Bolso blanco con detalles en azul y dorado",
        categoria: {
            nombre: "Bolsos",
            id: "bolsos"
        },
        precio: 85000
    },
    {
        id: "bolso-05",
        titulo: "Bolso de mano 1",
        imagen: "./Img/Bolsos/bolso 5.jpg",
        descripcion: "Bolso de varios colores",
        categoria: {
            nombre: "Bolsos",
            id: "bolsos"
        },
        precio: 80000
    },
    {
        id: "bolso-06",
        titulo: "Bolso de mano 2",
        imagen: "./Img/Bolsos/bolso 6.jpeg",
        descripcion: "Bolso de varios colores",
        categoria: {
            nombre: "Bolsos",
            id: "bolsos"
        },
        precio: 80000
    },

    // Velas

    {
        id: "vela-01",
        titulo: "Vela 1",
        imagen: "./Img/Velas/vela 1.jpg",
        descripcion: "Vela",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 50000
    },
    {
        id: "vela-02",
        titulo: "Vela 2",
        imagen: "./Img/Velas/vela 2.jpg",
        descripcion: "Vela",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 45000
    },
    {
        id: "vela-03",
        titulo: "Vela 3",
        imagen: "./Img/Velas/vela 3.jpg",
        descripcion: "Vela",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 55000
    },
    {
        id: "vela-04",
        titulo: "Vela 4",
        descripcion: "Vela",
        imagen: "./Img/Velas/vela 4.jpg",
        descripcion: "Vela",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 50000
    },
    {
        id: "vela-05",
        titulo: "Vela 5",
        imagen: "./Img/Velas/vela 5.jpg",
        descripcion: "Vela",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 50000
    },
    {
        id: "vela-06",
        titulo: "Vela 6",
        imagen: "./Img/Velas/vela 6.jpg",
        descripcion: "Vela",
        categoria: {
            nombre: "Velas",
            id: "velas"
        },
        precio: 50000
    },
];

const containerProductos = document.querySelector("#container-producto");

// Funcion para cargar los productos
function cargarProductos() {

    containerProductos.innerHTML = "";

    productos.forEach((productos) => {

        const div = document.createElement("div");
        div.classList.add("productos-main");
        div.innerHTML = `
        <div class="producto">
            <img class="producto-img" src="${productos.imagen}" alt="${productos.titulo}">
            <div class="producto-info">
                <h3 class="producto-titulo">${productos.titulo}</h3>
                <p class="producto-descripcion">${productos.descripcion}</p>
                <p class="producto-precio">$${productos.precio}</p>
                <button class="boton-agregar-carro id="${productos.id}">Agregar al carro</button>
            </div>
        </div>
        `;

        containerProductos.append(div);

    });

}

cargarProductos();