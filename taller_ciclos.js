// TABLA DE MULTIPLICAR

let numero =(prompt("Ingresa un numero:"));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}

// Notas 

 
let nota =(prompt("Ingresa una nota (0 para terminar):"));
let suma = 0;
let cantidad = 0;

while (nota !== 0) {
    suma += nota;
    cantidad++;

    nota = parseFloat(prompt("Ingresa otra nota (0 para terminar):"));
}

if (cantidad > 0) {
    let promedio = suma / cantidad;

    console.log("Suma de las notas: " + suma);
    console.log("Cantidad de notas: " + cantidad);
    console.log("Promedio: " + promedio.toFixed(2));
} else {
    console.log("No ingresaste ninguna nota.");
}




let fichas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let omitir = 5;

for (let ficha of fichas) {
    if (ficha === omitir) {
        continue;
    }

    console.log("Ficha número: " + ficha);
}



for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
