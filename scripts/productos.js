const lista = document.querySelector('#listado')

fetch('scripts/productos.json')
    .then( (res) => res.json() )
    .then( (data) => {

        data.forEach((producto) => {

            const li = document.createElement('li')
            li.innerHTML = `
            <h4>${producto.nombre}</h4>
            <p>${producto.precio}</p>
            <p>codigo: ${producto.id}</p>
            <hr/>

            `
            lista.append(li)

        })
    })

    function hanldeClickProteina() {

        Swal.fire({
            title: 'Proteina',
            text: '8:00 - 10:00 - 12:00 - 14:00 - 16:00 - 18:00 - 20:00',
            imageUrl: '../imagenes/Olympos.png',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
        })
    
    }