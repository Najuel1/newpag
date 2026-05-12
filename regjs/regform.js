const Reglas = {
    soloLetras: (val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val),
    soloNumeros: (val) => /^[0-9]+$/.test(val),
    noVacio: (val) => val.trim().length > 0,
    minimo: (n) => (val) => val.length >= n,
    maximo: (n) => (val) => val.length <= n,
    esCorreo: (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
};

let tabla;

$(document).ready(function() {
    tabla = $('#tablaregistro').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
        }
    });

    $('#tablaregistro tbody').on('click', '.btn-eliminar', function () {
        let fila = tabla.row($(this).parents('tr'));
        
        if (confirm("¿Estás seguro de que querés eliminar este registro?")) {
            fila.remove().draw();
        }
    });

    $('#tablaregistro tbody').on('click', '.btn-editar', function () {
        let data = tabla.row($(this).parents('tr')).data();
        
        $("#dni").val(data[0]);
        $("#nombre").val(data[1]);
        $("#apellido").val(data[2]);
        $("#correo").val(data[3]);
        
        tabla.row($(this).parents('tr')).remove().draw();
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function validarFormulario(dni, nombre, apellido, email) {
    let todoOk = true;

    if (!Reglas.noVacio(dni)) {
        alert("El DNI está vacío");
        todoOk = false;
    } else if (!Reglas.soloNumeros(dni)) {
        alert("El DNI solo debe tener números");
        todoOk = false;
    } else if (!Reglas.minimo(8)(dni) || !Reglas.maximo(8)(dni)) {
        alert("El DNI debe tener exactamente 8 números");
        todoOk = false;
    }

    if (todoOk) {
        if (!Reglas.noVacio(nombre)) {
            alert("El nombre está vacío");
            todoOk = false;
        } else if (!Reglas.soloLetras(nombre)) {
            alert("El nombre solo permite letras");
            todoOk = false;
        }
    }

    if (todoOk) {
        if (!Reglas.noVacio(apellido)) {
            alert("El apellido está vacío");
            todoOk = false;
        } else if (!Reglas.soloLetras(apellido)) {
            alert("El apellido solo permite letras");
            todoOk = false;
        }
    }

    if (todoOk) {
        if (!Reglas.noVacio(email)) {
            alert("El correo está vacío");
            todoOk = false;
        } else if (!Reglas.esCorreo(email)) {
            alert("Ingrese un correo valido!");
            todoOk = false;
        }
    }

    return todoOk;
}

$("#formulario").on("submit", function(e) {
    e.preventDefault();

    let d = $("#dni").val().trim();
    let n = $("#nombre").val().trim();
    let a = $("#apellido").val().trim();
    let c = $("#correo").val().trim();

    if (validarFormulario(d, n, a, c)) {
        let botones = `
            <button type="button" class="btn-editar">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        tabla.row.add([d, n, a, c, botones]).draw(false);

        this.reset();
        console.log("Cargado correctamente");
    }
});