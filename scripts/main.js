    let nombre = document.getElementById('nombre');


    let apellido = document.getElementById('apellido');

        
    let edad = document.getElementById('edad');


    let email = document.getElementById('email');


    let certificado = document.getElementById('certificado');

  
    
    let miFormulario = document.getElementById('formulario');

    localStorage.setItem('nombre', "");
    localStorage.setItem('apellido', "");
    localStorage.setItem('edad', "");
    localStorage.setItem('email', "");
    localStorage.setItem('certificado', "");
    console.log(localStorage);
        
        miFormulario.addEventListener("submit", envioFormulario);
            

        function envioFormulario(e){

            e.preventDefault();

            let formulario = e.target

           
        }

        

