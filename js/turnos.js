document.addEventListener("DOMContentLoaded", () => {
    cargarTurnos();
});

function cargarTurnos() {
    const tabla = document.getElementById("tablaTurnos");

    const turnos = JSON.parse(localStorage.getItem("turnos")) || [];

    tabla.innerHTML = "";

    if (turnos.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-muted">
                    No hay turnos registrados
                </td>
            </tr>
        `;
        return;
    }

    turnos.forEach(turno => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${turno.nombre}</td>
            <td>${turno.dni}</td>
            <td>${turno.telefono}</td>
            <td>${turno.especialidad}</td>
            <td>${turno.medico}</td>
            <td>${turno.fecha}</td>
            <td>${turno.hora}</td>
        `;

        tabla.appendChild(fila);
    });
}