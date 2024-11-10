// Función para agregar un gasto
function agregarGasto() {
    const nuevoGasto = document.getElementById("nuevoGasto").value;
    const montoGasto = parseFloat(document.getElementById("montoGasto").value);
    const tipoGasto = document.getElementById("tipoGasto").value;

    if (!nuevoGasto || isNaN(montoGasto) || montoGasto <= 0) {
        alert("Por favor, ingrese un nombre y un monto válido para el gasto.");
        return;
    }

    // Crear el objeto del gasto
    const gasto = { nombre: nuevoGasto, monto: montoGasto, tipo: tipoGasto };

    // Obtener la lista de gastos desde localStorage, agregar el nuevo gasto y guardar la lista actualizada
    const gastosList = JSON.parse(localStorage.getItem("gastos")) || [];
    gastosList.push(gasto);
    localStorage.setItem("gastos", JSON.stringify(gastosList));

    // Redirigir a menu.html
    window.location.href = "menu.html";
}
