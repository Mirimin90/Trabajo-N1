

var var1 = document.getElementById("nombre");

var var2 = document.getElementById('correo');

var var3 = document.getElementById('floatingTextarea');



function validarDatos() {

    
    if (var1.value.trim() .length === 0) {
        alert("El nombre está vacío");
    }
    
    if (var2.value.trim() .length === 0) {
        alert("El email está vacío");
    
    }
    if (var3.value.trim().length === 0) {
        alert("El mensaje está vacío");
    }
    
    
}
