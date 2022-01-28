const clases = [
    
    { nombre: "Running", dias: "Lunes, Miercoles y Viernes"},
    { nombre: "Aero Thai", dias: "Martes, Jueves y Sabados" },
    { nombre: "Pump", dias: "Lunes y Jueves" },
    { nombre: "Box Training", dias: "Martes, Jueves y Sabados"},
    { nombre: "HIIT", dias: "Lunes, Martes, Miercoles, Jueves y Viernes" },
    { nombre: "Ritmos", dias: "Lunes, Martes, Miercoles, Jueves, Viernes y Sabado" },
 
]

    const clase1 = clases.map((el) => el.nombre)
    console.log(clase1)