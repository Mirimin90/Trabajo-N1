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

tresultado.addEventListener("keydown", function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        event.preventDefault()
    }

})


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


/* codigo del botón limpiar */
var bLimpiar = document.getElementById('bclean');
bLimpiar.addEventListener('click', function () { clean() });

function clean() {
    tresultado.value = '';
    ultnum = "";
    contador = 1;
}

function putOperador(op) {
    if (contador > 1) {
        if (ultnum != "(" || ultnum != ")") {
            alert("No puede ingresar 2 operadores seguidos");
            clean();
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





/* codigo del botón igual */
var bIgual = document.getElementById('bequal');
bIgual.addEventListener('click', function () { igual() });

function igual() {


    //try valida error unexpected token
    
    
       // const err = eval(resultado);

       
        if (tresultado.value.includes("/")) {
            if (ultnum === "0") {
                alert("No se puede dividir por 0");
                clean();
                return;
            }
        }

        if (tresultado.value.includes("√")) 
        {
            var result = tresultado.value.replace("√", "")
            var resultado  = Math.sqrt(result)
            if (isNaN(resultado))
            { 
                tresultado.value = "ERROR"
                return; 
            }        
            tresultado.value = Math.sqrt(result)
            //return;         
        }
                    

        if (tresultado.value.includes("^2")) {
            var squareTwo = tresultado.value.replace("^2", "")
            tresultado.value = Math.pow(squareTwo, 2)
            return;
        }

        
        try {
        
         var resultado = tresultado.value
         var res = eval(resultado) 
         
        if (res === undefined){
            tresultado.value = "" ;
            ultnum = "";
            contador = 1;
            return;  
        }

         tresultado.value = eval(resultado) 
        
        }



    catch (e) {

    tresultado.value = "ERROR"
    setTimeout(function () { clean(); }, 2000);


}


}

