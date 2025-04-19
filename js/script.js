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

document.querySelectorAll(".tarjetaPeliculas").forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.add("animar");
        setTimeout(() => {
            tarjeta.classList.remove("animar");
        }, 1000); 
    });
});

