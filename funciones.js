

function validar() {

var var1 =document.getElementById("nombre").value;

var var2 =document.getElementById("Correo").value;

var var3 =document.getElementById("floatingTextarea").value;

var respuesta = ""

    
    
        
        if (var1.trim().length === 0) {
           
            respuesta = "Nombre ,"  
        }
        
        if (var2.trim().length === 0) {
            
            respuesta = respuesta + "Email,";
        }
        if (var3.trim().length === 0) {
           
            respuesta = respuesta + "Mensaje";
        }

        if (respuesta.trim().length > 0) {
          
            alert("Debe llenar campos :" +  respuesta)
        }
        
        
    }

