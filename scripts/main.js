let nombre = "";
let edad = Number;
let certificado = "si";


    function pedirNombre (){
    
        let listaNombres = [];

        while (nombre == "" || nombre == " ") {
        nombre = prompt ("Ingresar nombre");
        listaNombres.push(nombre);
    
        if (nombre != "" && nombre != " "){
        alert ("Bienvenido " + nombre);   
        }   

        }
        return nombre;
    }

    
    function pedirEdad (){

        edad = prompt ("Ingresar edad");
        if (edad <= 17){
        alert (nombre + " necesitas autorizacion de tus padres");
        }
        else if (edad > 17){
            alert (nombre + " para entrenar necesitas certificado medico");
            certificado = prompt("Tenes certificado medico?");
            if (certificado == "si"){
                alert (nombre + " podes ingresar al gym");
            }else{
                alert ("Necesitas certificado medico " + nombre);
            }
        
        }

        return edad;
    }

    


    pedirNombre(nombre)
    pedirEdad(edad)