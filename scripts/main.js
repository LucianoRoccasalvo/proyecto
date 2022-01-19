let nombre = "";
let edad = Number;
let certificado = "si";

while (nombre == "" || nombre == " ") {
    nombre = prompt ("Ingresar nombre");
    
    if (nombre != "" && nombre != " "){
        alert ("Bienvenido " + nombre);
        edad = prompt ("Ingresar edad");
    }
}

    if (edad <= 17){
        alert (nombre + " necesitas autorizacion de tus padres");
    }else if (edad > 17){
        certificado = prompt (nombre + " tiene certificado medico?");
    }

    if (certificado == "si"){
        alert (nombre + " podes ingresar al gym");
    }else{
        alert (nombre + " necesitas certificado medico");
    }