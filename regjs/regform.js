const Reglas = {
    soloLetras: (val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val),
    soloNumeros: (val) => /^[0-9]+$/.test(val),
    noVacio: (val) => val.trim().length > 0,
    minimo: (n) => (val) => val.length >= n,
    maximo: (n) => (val) => val.length <= n,
    esCorreo: (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
};

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const dni = document.getElementById('dni');
const correo = document.getElementById('correo');

function validate() {
    if (!Reglas.noVacio(dni.value)) {
        dni.setCustomValidity('El DNI está vacío');
    } else if (!Reglas.soloNumeros(dni.value)) {
        dni.setCustomValidity('El DNI solo puede tener números');
    } else if (!Reglas.minimo(8)(dni.value) || !Reglas.maximo(8)(dni.value)) {
        dni.setCustomValidity('El DNI debe tener exactamente 8 números');
    } else {
        dni.setCustomValidity('');
    }

    if (!Reglas.noVacio(nombre.value)) {
        nombre.setCustomValidity('El nombre está vacío');
    } else if (!Reglas.soloLetras(nombre.value)) {
        // Esta regla bloquea números y caracteres especiales automáticamente
        nombre.setCustomValidity('El nombre solo puede contener letras');
    } else if (!Reglas.minimo(3)(nombre.value)) {
        nombre.setCustomValidity('El nombre debe tener al menos 3 caracteres');
    } else {
        nombre.setCustomValidity('');
    }

    if (!Reglas.noVacio(apellido.value)) {
        apellido.setCustomValidity('El apellido está vacío');
    } else if (!Reglas.soloLetras(apellido.value)) {
        apellido.setCustomValidity('El apellido solo puede contener letras');
    } else if (!Reglas.minimo(3)(apellido.value)) {
        apellido.setCustomValidity('El apellido debe tener al menos 3 caracteres');
    } else {
        apellido.setCustomValidity('');
    }

    if (!Reglas.noVacio(correo.value)) {
        correo.setCustomValidity('El correo está vacío');
    } else if (!Reglas.esCorreo(correo.value)) {
        correo.setCustomValidity('Escriba un correo valido');
    } else {
        correo.setCustomValidity('');
    }
}