/*for(let index=100;index>=1;index--){
    console.log(index)
}*/
/*let n=parseInt(prompt("ingrese el numero menor del rango:"));
let m=parseInt(prompt("ingrese el numeor mayor del rango:"));
for(let index=n;index<=m;index++){
    let modulo=index%2
    if(modulo%2!==0){
        console.log(index)
    }

}*/

/*let control=700;
while(control>=10){
    if(control%7==0){
        console.log(control)
    }
    control--
}*/



// let cumple =false;
// do{
//     let edad=parseInt(prompt("edad:"))
//     let estatura=parseFloat(prompt("estatura: cm"))
//     let peso=parseFloat(prompt("ingrese su peso:  (kg)"))
//     if(edad>=18 && estatura>=175 && (peso>= 75 && peso<=100)){
//         alert("usuario registrado")
//         cumple=true
//     }else{
//         alert("no cumples con los requisitos para el registro")
//     }
// }while(!cumple)

// 1.Dada la cadena “Javascript es un buen lenguaje”:
// a) Leer e imprimir los elementos de índices 3, 6, 8
// b) Recorra la cadena usando ciclo for

// let cadena="Javascript es un buen lenguaje"
// for(let x=0;x<cadena.length;x++){
//     if(x==3){
//         console.log(cadena[x])
//     }else if(x==6){
//         console.log(cadena[x])
//     }else if(x==9){
//         console.log(cadena[x])
//     }
// }


// 2.Dada la cadena “Somos VankVersity”:
// c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “V”
// d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
// variable contadora para contar el número de veces que se encuentra la letra “o”.

// let cadena="Somos VankVersity";
// let contador_o=0
// for(let x=0;x<cadena.length;x++){
//     if(cadena[x]=="V"){
//         console.log(`la frase si contiene la letra v`)
//     }
//     if(cadena[x]=="o"){
//         contador_o+=1
//     }
// }
// console.log(`la frase contine: ${contador_o} o`)

// 3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
// compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.

// let cadena=" Javascript es genial hola "
// let contador_espacios=0
// for(let x=0;x<cadena.length;x++){
//     if(cadena[x]==" "){
//         contador_espacios+=1
//         }
// }
// if(cadena[0]==" "){
//     contador_espacios-=1
// }
// if(cadena[cadena.length-1]==" "){
//     contador_espacios-=1

// }

// alert(contador_espacios+1)
// /*Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
// funciones.*/

// // Función para calcular el promedio de tres notas
// function calcularPromedio(nota1, nota2, nota3) {
//     return (nota1 + nota2 + nota3) / 3;
//   }
  
//   // Solicitar el número de estudiantes
//   let numEstudiantes = Number(prompt("Ingrese el número de estudiantes:"));
  
//   // Verificar si el número ingresado es válido
//   if (isNaN(numEstudiantes) || numEstudiantes <= 0) {
//     alert("Por favor, ingresa un número válido de estudiantes.");
//   } else {
//     // Ciclo para procesar las notas de cada estudiante
//     for (let i = 1; i <= numEstudiantes; i++) {
//       alert("Estudiante " + i);
      
//       // Solicitar las tres notas del estudiante
//       let nota1 = Number(prompt("Ingrese la primera nota del estudiante " + i + ":"));
//       let nota2 = Number(prompt("Ingrese la segunda nota del estudiante " + i + ":"));
//       let nota3 = Number(prompt("Ingrese la tercera nota del estudiante " + i + ":"));
  
      // Verificar si las notas son válidas
//       if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
//         alert("Por favor, ingresa notas válidas para el estudiante " + i + ".");
//       } else {
         // Calcular el promedio usando la función
//         let promedio = calcularPromedio(nota1, nota2, nota3);
  
        // Mostrar el promedio
//         alert("El promedio del estudiante " + i + " es: " + promedio.toFixed(2));
//       }
//     }
//   }

/*Cree un programa que muestre los números naturales de 1 a n. Use ciclo while.*/

// // Solicitar el valor de n al usuario
// let n = Number(prompt("Ingrese el número hasta el cual mostrar los números naturales:"));

// // Verificar si el valor ingresado es válido
// if (isNaN(n) || n <= 0) {
//   alert("Por favor, ingresa un número natural válido (mayor que 0).");
// } else {
//   let i = 1; // Inicializar el contador

//   // Ciclo while para mostrar los números del 1 a n
//   while (i <= n) {
//     console.log(i); // Mostrar el número actual en la consola
//     i++; // Incrementar el contador
//   }
  
//   alert("Los números del 1 al " + n + " se han mostrado en la consola.");
// }


/*Cree un programa que muestre los números impares entre 1 y n.*/

/*Cree un programa que muestre los números impares entre 1 y n.*/

// Solicitar el valor de n al usuario
// let n = Number(prompt("Ingrese un número hasta el cual mostrar los números impares:"));

// // Verificar si el valor ingresado es válido
// if (isNaN(n) || n <= 0) {
//   alert("Por favor, ingresa un número natural válido (mayor que 0).");
// } else {
//   let resultado = ""; // Cadena para almacenar los números impares

//   // Ciclo para encontrar e imprimir números impares
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) { // Verificar si el número es impar
//       resultado += i + " "; // Agregar el número a la cadena
//     }
//   }

//   // Mostrar los números impares
//   alert("Los números impares entre 1 y " + n + " son:\n" + resultado);
// }


/*Cree un programa que calcule el promedio de 10 números.*/

// let suma = 0; // Variable para almacenar la suma de los números

// // Ciclo para pedir 10 números al usuario
// for (let i = 1; i <= 10; i++) {
//   let numero = Number(prompt("Ingrese el número " + i + " de 10:"));

//   // Validar si la entrada es un número
//   if (isNaN(numero)) {
//     alert("Entrada no válida. Por favor, ingresa un número.");
//     i--; // Reducir el contador para que el usuario vuelva a ingresar un número válido
//   } else {
//     suma += numero; // Agregar el número a la suma total
//   }
// }

// // Calcular el promedio
// let promedio = suma / 10;

// // Mostrar el promedio
// alert("El promedio de los 10 números ingresados es: " + promedio.toFixed(2));
/*Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.*/

// Solicitar al usuario el valor de n
let n = Number(prompt("Ingrese un número n para calcular la suma de los cuadrados de los números entre 1 y n:"));

// Verificar si el valor ingresado es válido
if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número natural válido (mayor que 0).");
} else {
  let sumaCuadrados = 0; // Variable para almacenar la suma de los cuadrados

  // Ciclo para calcular la suma de los cuadrados
  for (let i = 1; i <= n; i++) {
    sumaCuadrados += i * i; // Sumar el cuadrado de i
  }

  // Mostrar el resultado
  alert("La suma de los cuadrados de los números entre 1 y " + n + " es: " + sumaCuadrados);
}
