// ciclo while Se repite mientras la condición sea verdadera

let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}    

// validacion de contraseña

let contrasena_servidor = "sena12345";
let contrasena_usuario = "sena12345";

while (contrasena_usuario !== contrasena_servidor){
    console.log("Clave incorrecta intentolo de nuevo:");
}
console.log("!Bienvenido al sistema!");
 
// APLICACION DE ENTRADA A BAR

let edad = 19;
while (edad <= 18){
    console.log(" No puedes entrar al bar. Eres menor de edad.");
    edad++;
}
console.log("BIENVANIDO AL BAR");

// APP DE RIEGO DE PLANTAS

let cantidad_agua = 0;

while (cantidad_agua <= 10){
    console.log("riegas las plantas con " + cantidad_agua + " litros de agua.");
    cantidad_agua++;
}
console.log("!Todas las plantas han sido regadas!");

// ciclo while 

let numero = 1;

do{
    console.log(numero);
    numero++;
} while(numero <= 10);

// centencia break _ permite salir de un bucle antes de te terminne


for (let i=1; i <= 10; i++){
    if (i == 6){
        console.log("Se ha alcanzado el numero 5. Salimos del bucle.");
            break
    }
    console.log(i)

}

// BAR CON BRE

for (let edad_cliente = 18; i <= 20; i++){
    if (edad_cliente < 18){
        console.log("No puedes entrar en el bar. Eres menor de edad");
            break
    }
    console.log("BIENVENIDO AL BAR");
}    

// SENTENCIA CONTINUE: SALTA

for (let i = 1; i <= 10; i++){
    if (i === 5){
        console.log("Se salto el numero");
        continue;
    }
    console.log(i)
}

