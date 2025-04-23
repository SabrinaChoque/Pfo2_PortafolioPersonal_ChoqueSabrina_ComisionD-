console.log("js cargado");

document.querySelector(".form-contacto").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();

    if (!nombre || !apellido || !email || !telefono) {
        alert("Faltan campos para completar.");
    } else {
        alert("Formulario se envio con exito.");
    }
});


function toggleSobreMi() {
    const seccion = document.getElementById("sobreMi");
    seccion.classList.toggle("oculto");
}

window.addEventListener("load", function () {
  
    let visitas = localStorage.getItem("contadorVisitas");

    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        visitas = 1;
    }

    localStorage.setItem("contadorVisitas", visitas);

  
    const divContador = document.getElementById("contador");
    divContador.textContent = `Esta página fue visitada ${visitas} veces desde este navegador.`;

   
    const mensaje = document.createElement("div");
    mensaje.textContent = "¡Bienvenidos a mi portafolio!";
    mensaje.classList.add("mensaje-bienvenida");
    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 3000);
});


document.getElementById("modoToggle").addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    
    if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("modo", "oscuro");
    } else {
        localStorage.setItem("modo", "claro");
    }
});


const peliculas = [
    {
        titulo: "El Extraño Mundo De Jack",
        descripcion: "Jack Skellington, el Rey de Halloween, descubre la Navidad y decide asumir el papel de Santa Claus, con consecuencias inesperadas.",
        imagen: "img/ExtrañoMundoDeJack.jpg",
        categoria: "stop-motion"
    },
    {
        titulo: "El Cadáver de la Novia",
        descripcion: "Un joven se compromete accidentalmente con el espíritu de una novia que nunca logró casarse. Una historia gótica sobre el amor y las tradiciones.",
        imagen: "img/cadaverDeLaNovia.jpg",
        categoria: "stop-motion"
    },
    {
        titulo: "El Castillo Ambulante",
        descripcion: "Sophie, convertida en anciana por una bruja, encuentra el castillo de Howl. Juntos descubrirán magia, amor y valentía.",
        imagen: "img/elCastilloAmbulante.jpg",
        categoria: "fantasía"
    }
];


function mostrarPeliculas() {
    const contenedor = document.getElementById("galeriaPeliculas");
    peliculas.forEach(peli => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjetaPeliculas");

        tarjeta.innerHTML = `
            <img src="${peli.imagen}" alt="imagen:${peli.titulo}">
            <h3>${peli.titulo}</h3>
            <p>${peli.descripcion}</p>
        `;

        tarjeta.addEventListener("click", () => {
            tarjeta.classList.add("animar");
            setTimeout(() => {
                tarjeta.classList.remove("animar");
            }, 1000);
        });

        contenedor.appendChild(tarjeta);
    });
}
function filtrarPeliculas(categoria) {
    const contenedor = document.getElementById("galeriaPeliculas");
    contenedor.innerHTML = ""; // Limpiamos la galería

    let peliculasFiltradas = categoria === "todas" ? peliculas : peliculas.filter(p => p.categoria === categoria);

    peliculasFiltradas.forEach(peli => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjetaPeliculas");

        tarjeta.innerHTML = `
            <img src="${peli.imagen}" alt="imagen:${peli.titulo}">
            <h3>${peli.titulo}</h3>
            <p>${peli.descripcion}</p>
        `;

        tarjeta.addEventListener("click", () => {
            tarjeta.classList.add("animar");
            setTimeout(() => {
                tarjeta.classList.remove("animar");
            }, 1000);
        });

        contenedor.appendChild(tarjeta);
    });
}
function iniciarTemporizador() {
    const fin = new Date("2025-05-05T23:59:59").getTime();

    function actualizar() {
        const ahora = new Date().getTime();
        const diferencia = fin - ahora;

        if (diferencia <= 0) {
            document.getElementById("temporizador").textContent = "¡Plazo de entrega finalizado!";
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("temporizador").textContent = 
            `Tiempo restante para entregar: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    const intervalo = setInterval(actualizar, 1000);
}


window.addEventListener("DOMContentLoaded", () => {
    const modo = localStorage.getItem("modo");
    if (modo === "oscuro") {
        document.body.classList.add("modo-oscuro");
    }
    mostrarPeliculas();
    filtrarPeliculas("todas"); 
    iniciarTemporizador();
});


