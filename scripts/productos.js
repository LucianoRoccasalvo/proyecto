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
            text: 'Precio: $4000',
            imageUrl: '../imagenes/Olympos.png',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
        })
    
    }

    function hanldeClickCreatina() {

        Swal.fire({
            title: 'Creatina',
            text: 'Precio: $3500',
            imageUrl: '../imagenes/Olympos.png',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
        })
    
    }

    function hanldeClickBCAA() {

        Swal.fire({
            title: 'BCAA',
            text: 'Precio: $3000',
            imageUrl: '../imagenes/Olympos.png',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
        })
    
    }