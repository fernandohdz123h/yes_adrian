function mostrarSeguros() {
    const seguroPregunta = document.getElementById("seguroPregunta").value;
    const seguroLista = document.getElementById("seguroLista");

    if (seguroPregunta === "si") {
        seguroLista.classList.remove("oculto");
    } else {
        seguroLista.classList.add("oculto");
    }
}

function mostrarInversiones() {
    const inversionPregunta = document.getElementById("inversionPregunta").value;
    const inversionLista = document.getElementById("inversionLista");

    if (inversionPregunta === "si") {
        inversionLista.classList.remove("oculto");
    } else {
        inversionLista.classList.add("oculto");
    }
}

function mostrarCapital() {
    const capitalPregunta = document.getElementById("capitalPregunta").value;
    const capitalLista = document.getElementById("capitalLista");

    if (capitalPregunta === "si") {
        capitalLista.classList.remove("oculto");
    } else {
        capitalLista.classList.add("oculto");
    }
}

function guardarDatos() {
    const seguroPregunta = document.getElementById("seguroPregunta").value;
    const inversionPregunta = document.getElementById("inversionPregunta").value;
    const capitalPregunta = document.getElementById("capitalPregunta").value;

    // Guardar datos de seguros
    let seguros = [];
    if (seguroPregunta === "si") {
        document.querySelectorAll(".seguro-item").forEach((item) => {
            const tipo = item.querySelector(".tipo-seguro").value;
            const monto = parseFloat(item.querySelector(".monto-seguro").value);
            if (!isNaN(monto)) {
                seguros.push({ tipo, monto });
            }
        });
    }

    // Guardar datos de inversiones
    let inversiones = [];
    if (inversionPregunta === "si") {
        document.querySelectorAll(".inversion-item").forEach((item) => {
            const tipo = item.querySelector(".tipo-inversion").value;
            const monto = parseFloat(item.querySelector(".monto-inversion").value);
            if (!isNaN(monto)) {
                inversiones.push({ tipo, monto });
            }
        });
    }

    // Guardar datos de capital
    let capital = [];
    if (capitalPregunta === "si") {
        document.querySelectorAll(".capital-item").forEach((item) => {
            const tipo = item.querySelector(".tipo-capital").value;
            const monto = parseFloat(item.querySelector(".monto-capital").value);
            if (!isNaN(monto)) {
                capital.push({ tipo, monto });
            }
        });
    }

    // Variables con los datos finales
    const datosUsuario = {
        tieneSeguro: seguroPregunta === "si",
        seguros: seguros,
        tieneInversion: inversionPregunta === "si",
        inversiones: inversiones,
        tieneCapital: capitalPregunta === "si",
        capital: capital
    };

    console.log("Datos guardados:", datosUsuario);
    window.location.href = "analizado.html";
}
