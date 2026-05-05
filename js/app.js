let medicosGlobal = [];

document.addEventListener("DOMContentLoaded", () => {
    cargarMedicos();

    const selectEspecialidad = document.getElementById("especialidad");
    if (selectEspecialidad) {
        selectEspecialidad.addEventListener("change", filtrarMedicos);
    }

    configurarFormulario();
});


   MÉDICOS (JSON + FETCH)

function cargarMedicos() {
    fetch("../data/medicos.json")
        .then(res => res.json())
        .then(data => {
            medicosGlobal = data;
            mostrarMedicos(data);
        })
        .catch(() => {
            mostrarToastError("Error al cargar médicos");
        });
}

function mostrarMedicos(lista) {
    const select = document.getElementById("medicos");
    if (!select) return;

    select.innerHTML = `<option value="" disabled selected>Seleccione un médico...</option>`;

    lista.forEach(medico => {
        const option = document.createElement("option");
        option.value = medico.nombre;
        option.textContent = `${medico.nombre} - ${medico.especialidad}`;
        select.appendChild(option);
    });
}

function filtrarMedicos() {
    const especialidad = document.getElementById("especialidad").value;

    const filtrados = medicosGlobal.filter(medico =>
        medico.especialidad === especialidad
    );

    mostrarMedicos(filtrados);
}

/* =========================
   FORMULARIO TURNOS
========================= */
function configurarFormulario() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const turno = {
            nombre: document.getElementById("nombre").value.trim(),
            dni: document.getElementById("dni").value.trim(),
            telefono: document.getElementById("telefono").value.trim(),
            especialidad: document.getElementById("especialidad").value,
            medico: document.getElementById("medicos").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value
        };

        let turnos = JSON.parse(localStorage.getItem("turnos")) || [];
        turnos.push(turno);
        localStorage.setItem("turnos", JSON.stringify(turnos));

        mostrarToastOK("✔ Turno solicitado correctamente");

        form.reset();
    });
}


   TOASTIFY (MENSAJES)

function mostrarToastOK(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)"
        }
    }).showToast();
}

function mostrarToastError(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "#dc3545"
        }
    }).showToast();
}