let nota = Number(prompt("dijita la nota:"));
if (nota >= 0 && nota <= 5){

    if (nota >= 4.5){
        console.log("Calificacion: Exelente");
        } else if (nota >= 3.5){
        console.log("Calificacion: Bueno");
        } else if (nota >= 3.0){
        console.log("Calificacion: Aseptable");
        } else{
        console.log("Calificacion: Debe reforzar");
        }
} else{
    console.log("Nota no valida")
}

    let menu = Number(prompt("menu principal: \n 1. Ver horario \n 2. Consultar Notas \n 3. Salir"));
    switch(opcion){
        case "1":
            console.log("Mostrar el horario de clase...");
            break;
        case "2":
            console.log("Consultando tus notas...");
            break;
        case "3":
            console.log("Saliendo del programa. !Hasta pronto!...");
            break; 
        default:
            console.log("Opcion no valida");           
    }