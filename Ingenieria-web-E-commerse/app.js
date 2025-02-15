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
            id: "bolsos"
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
            id: "bolsos"
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
        descripcion: "Bolso de varios colores con ornamentos de colores",
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
        descripcion: "Bolso de varios colores con ornamentos de colores",
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
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector(".titulo-main");
const numeroProductos = document.querySelector("#numero-productos");
let botonesAgregarCarro = document.querySelectorAll(".boton-agregar-carro");

// Funcion para cargar los productos
function cargarProductos(productosElegidos) {

    containerProductos.innerHTML = "";

    productosElegidos.forEach((productos) => {

        const div = document.createElement("div");
        div.classList.add("productos-main");
        div.innerHTML = `
        <div class="producto">
            <img class="producto-img" src="${productos.imagen}" alt="${productos.titulo}">
            <div class="producto-info">
                <h3 class="producto-titulo">${productos.titulo}</h3>
                <p class="producto-descripcion">${productos.descripcion}</p>
                <p class="producto-precio">$${productos.precio}</p>
                <button class="boton-agregar-carro" id="${productos.id}">Agregar al carro</button>
            </div>
        </div>
        `;

        containerProductos.append(div);

    });

    actualizarAgregarCarro();

}

cargarProductos(productos);

// Este pedazo sirve para filtrar los productos por categoria en el aside
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
    
        botonesCategorias.forEach(boton => boton.classList.remove ("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos-los-productos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }
        else {
            tituloPrincipal.innerText= "Todos nuestros productos";
            cargarProductos(productos);
        }

    })
});

// Funcion para actualizar los botones de agregar al carro
function actualizarAgregarCarro() {
    botonesAgregarCarro = document.querySelectorAll(".boton-agregar-carro");
    
    botonesAgregarCarro.forEach(boton => {
        boton.addEventListener("click", agregarAlCarro);
    });
}

// Almacenar productos en el local storage
let productosCarro;
let productosCarroLS = localStorage.getItem("productosCarro");
if (productosCarroLS) {
    productosCarro = JSON.parse(productosCarroLS);
    actualizarNumeroProductos();
} 
else {
    productosCarro = [];
}

// Funcion para agregar al carro
function agregarAlCarro(e) {

    const idProducto = e.currentTarget.id;
    const productoAgregar = productos.find(producto => producto.id === idProducto);

    if (productosCarro.some(producto => producto.id === idProducto)) {
        const index = productosCarro.findIndex(producto => producto.id === idProducto);
        productosCarro[index].cantidad++;
    }
    else {
        productoAgregar.cantidad = 1;
        productosCarro.push(productoAgregar);
    }

    actualizarNumeroProductos();

    localStorage.setItem("productosCarro", JSON.stringify(productosCarro));

}

// Funcion para actualizar el numero de productos
function actualizarNumeroProductos() {
    let nuevoNumeroProductos = (productosCarro.reduce((acc, producto) => acc + producto.cantidad, 0));
    numeroProductos.innerText = nuevoNumeroProductos;
}