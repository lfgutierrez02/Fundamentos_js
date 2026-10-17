let nota1 = Number(prompt("ingrese la nota 1:"));
let nota2 = Number(prompt("ingrese la nota 2:"));
let nota3 = Number(prompt("ingrese la nota 3:"));

// culcular el promedio

let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

// saber si aprobo

let aprobo = promedio >= 3.0;

// mostrar el resultado

console.log(`El aprendiz obtuvo un promedio de ${promedio}. ?Aprobo? ${aprobo}`);

let faltan = 0;