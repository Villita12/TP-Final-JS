
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let correo = document.getElementById('correo')  
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let total = document.getElementById('total');
let precio = 200;

function resumen() {
    
    switch(categoria.value) {
        case "estudiante": 
            categoria = precio * 0.2
            break;
        case "trainee": 
            categoria = precio * 0.5
            break;
        case "junior":
            categoria = precio * 0.85
            break;
    }
    total.value = "Total a Pagar $: " + (cantidad.value * categoria);

    if(nombre.value === "" ) {
        alert("Debes ingresar un Nombre!");
        
    }else if(apellido.value === "" ) {
        alert("Debes ingresar un Apellido!");
        
    }else if(correo.value === "") {
        alert("Debes ingresar un Correo!");
        
    }else if(cantidad.value < 1) {
        alert("Debes ingresar una cantidad mayor a 1!")
    }
    else {
         alert(nombre.value + " " + apellido.value + " tu compra es de: " + cantidad.value + " Tickets de la categoria " + document.getElementById('categoria').value + "." +"            " + total.value);
         
         alert("Muchas gracias por tu compra, " + nombre.value + "! Tu recibo fue enviado al correo: " + correo.value);
         document.getElementById('resumen').disabled = true; 
    }
    }
function borrar() {
    location.reload();
}

     

