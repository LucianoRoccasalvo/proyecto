    let nombre = document.getElementById('nombre');


    let apellido = document.getElementById('apellido');

        
    let edad = document.getElementById('edad');


    let email = document.getElementById('email');


    let certificado = document.getElementById('certificado');

    
    let miFormulario = document.getElementById('formulario');

        
        miFormulario.addEventListener("submit", envioFormulario);
            

        function envioFormulario(e){

            e.preventDefault();

            let formulario = e.target

            console.log(miFormulario.children[0].value)
            console.log(miFormulario.children[1].value)
            console.log(miFormulario.children[2].value)
        }

    