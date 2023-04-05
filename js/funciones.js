var tresultado = document.getElementById('resultado');

/* codigo de botones numéricos */
var botonesNum = document.getElementsByClassName('btn btn-dark');
var ultnum = ""
var contador = 1; // cuenta las veces que se presiona sobre un operador
var contadorParentesis = 0

for (let i = 0; i < botonesNum.length; i++) {
    const element = botonesNum[i];
    element.addEventListener('click', function () { putNumber(element.innerText) });
}

 /*tresultado.addEventListener("keydown", function (event) {
    event.preventDefault()
})*/


function putNumber(valor) {

    if (ultnum == "") {
        tresultado.value += valor;
        ultnum = valor;

    } else {
        tresultado.value += valor;
        ultnum = valor;
        contador = 1
    }
}

var botonesOperacion = document.getElementsByClassName('btn btn-primary');

for (let i = 0; i < botonesOperacion.length; i++) {
    const element = botonesOperacion[i];
    element.addEventListener('click', function () { putOperador(element.innerText) });
}

function putOperador(op) {
    if (contador > 1) {
        if (ultnum != "(" || ultnum != ")") {
            alert("No puede ingresar 2 operadores seguidos");
            return
        }
        else {
            tresultado.value += op;
            contador++
            ultnum = op
        }

    }
    else {
        tresultado.value += op;
        contador++
        ultnum = op
    }
}



/* codigo del botón limpiar */
var bLimpiar = document.getElementById('bclean');
bLimpiar.addEventListener('click', function () { clean() });

function clean() {
    tresultado.value = '';
    ultnum = "";
    contador = 1;
}

/* codigo del botón igual */
var bIgual = document.getElementById('bequal');
bIgual.addEventListener('click', function () { igual() });

function igual() {

    contador = 1



    if (tresultado.value.includes("/")) {
        if (ultnum === "0") {
            alert("No se puede dividir por 0");
            clean();
            return;
        }
    }

    if (tresultado.value.includes("√")) {
        var result = tresultado.value.replace("√", "")
        tresultado.value = Math.sqrt(result)
    }

    if (tresultado.value.includes("^2")) {
        var squareTwo = tresultado.value.replace("^2", "")
        tresultado.value = Math.pow(squareTwo, 2)
    }

    var resultado = eval(tresultado.value)
    if (isNaN(resultado)) {
        tresultado.value = "ERROR"
    }
    else {
        tresultado.value = eval(resultado)
    }

}
