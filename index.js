document.getElementById("formulario").addEventListener('submit', validarFormulario);

function validarFormulario(evento) {
    evento.preventDefault();
    
    var tarjeta = document.getElementById('tarjeta').value;
    if (tarjeta.length < 16) {
        alert('el numero de tarjeta es menor a 16, por favor ingrese un valor valido');
        return;
    }
    var cvc = document.getElementById('cvc').value;
    if (cvc.length < 3) {
        alert('el numero es menor a 3, por favor ingrese un valor valido');
        return;
    }

    var monto = document.getElementById('monto').value;
    if (monto <= 0) {
        alert('el monto es invalido, por favor ingrese un valor valido');
        return;
    }

    var nombre = document.getElementById('nombre').value;
    if (nombre <= 0) {
        alert('el nombre esta vacio, por favor ingrese un valor valido');
        return;
    }

    var apellido = document.getElementById('apellido').value;
    if (apellido <= 0) {
        alert('el apellido esta vacio, por favor ingrese un valor valido');
        return;
    }

    var ciudad = document.getElementById('ciudad').value;
    if (ciudad <= 0) {
        alert('la ciudad esta vacia, por favor ingrese un valor valido');
        return;
    }

    var provincia = document.getElementById('provincia').value;
    if (provincia === 'opcion') {
        alert('Por favor, eliga una provincia');
        return;
    }

    var codigoPostal = document.getElementById('codigoPostal').value;
    if (codigoPostal < 5) {
        alert('el codigo postal tiene menos de 5 digitos, por favor ingrese un valor valido');
        return;
    }

    var metodoPago = document.getElementsByName('tarjeta');
    if (metodoPago[0].checked == false && metodoPago[1].checked == false && metodoPago[2].checked == false && metodoPago[3].checked == false){
        alert('Por favor, escoja un metodo de pago');
        return;
    }
}