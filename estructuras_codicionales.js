// esdtructura condicional if 

let Evidencia = 4.0;
if (Evidencia >= 3.5){
    console.log("El resultado es APROVADO")

}

// esdtructura condicional else
    else{
        console.log("El resultado no fue APROVADO")

    }

    // esdtructura condicional else if
    // clasificacion de edades

    let edad = 70;

    if (edad <= 13){
        console.log("Eres un niño");
    }

     else if (edad <= 18){
        console.log("Eres un adolecente");
    }

     else if (edad <= 60){
        console.log("Eres un adulto");
    }

     else{
        console.log("Eres un adulto mayor");
    }

    //if anidado

    let edad_actual = 23;
    let semanas_cotizadas = 1600;
    let genero = "masculino";

    if (genero = "femenino"){
        if (edad_actual >= 57){
            if(semanas_cotizadas>=1250){
                console.log("Feliciades te pensionastee")
            } else {
                console.log("Lo siento no tienes la semanas suficientes para pensionarte")
            }
        } else {
            console.log("Lo siento pero no tienes la edad suficiente para pensionate")
        }

    }else if (genero = "masculino"){
        if (edad_actual >= 60){
            if(semanas_cotizadas>=1600){
                console.log("Feliciades te pensionastee")
            } else {
                console.log("Lo siento no tienes la semanas suficientes para pensionarte")
            }
        } else {
            console.log("Lo siento pero no tienes la edad suficiente para pensionate")
        }
    } else {
        console.log("Lo siento no puedo calcular la pension para este parametro")
    } 

// condicional con operador ADD
// inicio de sesion - login

let correo = "sena@gmail.com";
let contraseña = "123456";

if (correo == "sena@gmail.com" && contraseña == "123456"){
    console.log("Bienvenido al sistema");  
}else{
    console,log("Correo o contraseña Incorrectos");
}

// condicional con operadores logicos OR
// proceso de certificacion sene

let etapa_lectiva = true;
let etapa_practica = true;

if ( etapa_lectiva || etapa_practica){
    console.log("Felicitaciones te certificaste")
}else {
    console.log("Lo siento, no cumple con los requisitos de certificacion")
}

// let ternario

let nota = 4.6
let resultado = (nota>=3.5)? "APROBADO": "NO APROBO";
console.log(resultado)

// switch de dias de la semana

let dia = 8;

switch (dia){
    case 1:
        console.log("Lunes");
        break;
    
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;   
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;    
    case 6:
        console.log("Sabado");
        break;    
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia no valido");                                   
}


// RETO:CALCULADORA CON MENU MANEJADO CON EL SWITCH

let numero_1 = Number(prompt("dijita el numero 1:"));
let numero_2 = Number(prompt("dijita el numero 2:"));
let opcion = Number(prompt("digita el numero de la opcion que corresponda: \n 1. sumar \n 2. restar \n 3. multiplicar \n 4. diviir:"));

switch(opcion){
    case 1:
        console.log(`La suma entre ${numero_1} y ${numero_2} es igual a:${(numero_1 + numero_2)}`);
            break;
     case 2:
        console.log(`La resta ${numero_1} y ${numero_2} es igual a:${(numero_1 - numero_2)}`);
            break;
     case 3:
        console.log(`La multiplicacion ${numero_1} y ${numero_2} es igual a:${(numero_1 * numero_2)}`);
            break;
     case 4:
        if (numero_2 !=0){
            console.log(`La division ${numero_1} y ${numero_2} es igual a:${(numero_1 / numero_2)}`);
        
        }else{
            console.log("No se puede dividir entrew 0");
        }
        default:
            console.log("opcion no valida");                        

}

