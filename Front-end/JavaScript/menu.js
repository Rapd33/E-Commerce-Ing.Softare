const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
});

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
});

document.addEventListener("DOMContentLoaded", () => {
    const botonesCategorias = document.querySelectorAll(".boton-categorias");
    botonesCategorias.forEach(boton => 
        boton.addEventListener("click", (e) => {
            aside.classList.remove("aside-visible");
        })
    );

    initializeUserButton();
});

function initializeUserButton() {
    const botonUsuario = document.querySelector(".boton-usuario");
    const nombreUsuario = document.querySelector(".nombre-usuario");

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {
        nombreUsuario.textContent = usuario.username;  // Mostrar el nombre
        botonUsuario.addEventListener("click", (event) => {
            event.preventDefault();
        });
    } else {
        nombreUsuario.textContent = "Iniciar Sesión";
        botonUsuario.addEventListener("click", (event) => {
            event.preventDefault();  // Evitar la acción predeterminada del enlace
            // No hacer nada si no hay usuario
        });
    }
}