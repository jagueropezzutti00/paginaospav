# 🏥 Sistema de Gestión de Turnos Médicos – OSPAV Maipú

Proyecto desarrollado como evaluación final del curso de JavaScript.

## 📌 Descripción

Este proyecto simula un sistema real de gestión de turnos médicos para una obra social.

Permite a los usuarios:
- Solicitar turnos online
- Seleccionar especialidad médica
- Filtrar profesionales automáticamente
- Registrar datos del turno

Además, cuenta con un panel administrativo donde el personal puede visualizar los turnos registrados.

---

## ⚙️ Tecnologías utilizadas

- HTML5
- CSS3 + Bootstrap
- JavaScript (ES6)
- JSON (datos externos)
- Fetch API
- LocalStorage (simulación de base de datos)
- Toastify (librería externa)

---

## 🔄 Funcionamiento

1. El usuario selecciona una especialidad
2. El sistema filtra médicos dinámicamente
3. Se completa el formulario de turno
4. El turno se guarda en LocalStorage
5. El panel administrativo muestra los turnos

---

## 🧠 Conceptos aplicados

- Manipulación del DOM
- Eventos (`submit`, `change`, `DOMContentLoaded`)
- Asincronismo con `fetch`
- Uso de JSON externo
- Métodos de arrays (`filter`)
- Almacenamiento en LocalStorage
- Uso de librerías externas (Toastify)

---

## 🔐 Acceso al panel administrativo

Para ingresar al panel:

- Usuario: `admin`
- Contraseña: `1234`

---

## 📁 Estructura del proyecto
/data
├── medicos.json
└── turnos.json

/js
├── app.js
└── turnos.js

/pages
├── solicitar-turno.html
├── login.html
└── admin/
└── turnos.html

index.html

---

## 💻 Demo

El proyecto puede ejecutarse localmente utilizando Live Server.

---

## 🔗 Repositorio

👉 https://github.com/jagueropezzutti00/paginaospav

---

## 🧠 Reflexión final

Este proyecto me permitió integrar todos los conceptos aprendidos durante el curso, aplicándolos en un caso real.

Se logró construir una aplicación funcional, utilizando herramientas modernas de JavaScript y simulando el comportamiento de un sistema profesional.

---
