//Funcion Simple
function saludar (){
    console.log("Hola Mundo");
}
//Llamar la funcion
saludar();

//Funcion con parametros

function saludoPersonalizado (nombre, apellido){
    console.log("Hola " + nombre + " " + apellido);
}
saludoPersonalizado("Jenifer" , "Tibaduiza");
saludoPersonalizado("Laura" , "Gonzalez");
saludoPersonalizado("Tatiana" , "Lopez");

//Funcion con parametros por defecto
function bienvenidaSENA(nombre, programa="ADSO"){
    console.log("Hola Aprendiz" ${nombre} del programa ${programa});
}
bienvenidaSENA("Jenifer");
bienvenidaSENA("Lola", "Mineria");

//Funcion con parametros desordenados
function calcularEdad(nombre,anioNacimiento){
    let edad = 2026 - anioNacimiento;
    console.log(Hola ${nombre}, tu edad es ${edad} anios);
}
calcularEdad("Jenifer", 1994);
calcularEdad("Fernando", 2002);
calcularEdad("Alejandra", 2005);

//Funcion con return
function calcularPromedio(num1, num2, num3){
    let resultado = (num1 + num2 + num3) / 3;
    return resultado;
}
let result = calcularPromedio(4,5,3);
console.log( El resultado del promedio es : ${result});

//CALCULADORA

function suma(num1, num2){
    return num1 + num2;
}
function resta(num1, num2){
    return num1 - num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    return num1 / num2;
}

console.log(suma(10,2));
console.log(resta(10,2));
console.log(multiplicar(10,2));
console.log(dividir(10,2));

function calculadora(num1,num2, opcion){
    switch(opcion){
        case 1:
            return suma (num1, num2);
        case 2:
            return resta (num1, num2);
        case 3:
            return multiplicar (num1, num2);
        case 4:
            return dividir (num1, num2);
        default:
            return("opcion no valida");
    }
   
}
console.log(calculadora(5,3,1));
console.log(calculadora(10,3,2));
console.log(calculadora(9,5,3));
console.log(calculadora(28,2,4));