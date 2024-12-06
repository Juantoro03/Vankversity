


// function entrada(edad, estatura, permiso){

//     if(edad>=18 && estatura>150){
//         return "Bienvenido"
//     }else if(edad<18 && estatura>150 ){
//         if(permiso=="si"){
//             return "bienvenido"
//         }else{
//             return "no puedes ingresar ya que no cumples con el permiso"
//         }
//     }else{
//         return "no puedes ingresar"
//     }
// }
// console.log(entrada(18,150,"no"))



// function contraseña(cantidad){
//     let contraseña="";
//     let caracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'
//     for(let x=0;x<cantidad;x++){
//         let caracter=Math.floor(Math.random()*caracteres.length)
//         contraseña+=caracteres[caracter]

//     }
//     return contraseña

// }

// console.log(contraseña(9))

// function facturacion(monto, pago) {
//     let total=0
  

//     if(monto>=200 && monto<=400){
//         if(pago=="E"){
//             total=monto-(monto*-0.3)
//         }else if(pago=="C"){
//             total=monto-(monto*-0.2)
//         }else{
//             total=monto-(monto*-0.1)
//         }
//     }else if(monto>400){
//         total=monto-(monto*0.4)
//     }else{
//         total=monto
//     


// }


// function operacion(n1,n2,operacion){
//     let resultado
//     switch(operacion){
//         case "suma":
//             resultado=n1+n2
//             break;
//         case "resta":
//             resultado=n1-n2
//             break;
//         case "multiplicacion":
//             resultado=n1*n2
//             break;
//         case "division":
            
//             resultado=n1/n2 
//             break;     

//     }
//     return resultado
    

// }

// console.log(operacion(8,3, "suma"))

// let notas
// for(let x=1;x<=3;x++){
//     notas+=parseFloat(prompt(`ingrese la nota ${x}`))
// }

// function resultado(){
//     if(notas/3>=6){
//         return "aprobo"
//     }else{
//         return "reprobo"
//     }
// }

/*Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y retorne su área.*/

// Función para calcular el área de un rectángulo
// function calcularAreaRectangulo(base, altura) {
//     return base * altura;
// }

// // Pedir los valores de base y altura al usuario
// let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
// let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

// // Calcular el área
// let area = calcularAreaRectangulo(base, altura);

// // Mostrar el resultado en una alerta
// alert(`El área del rectángulo es: ${area}`);


/*Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola Juan”, por ejemplo si el nombre pasado es Juan.*/

// Función para saludar a una persona por su nombre
// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// // Pedir el nombre al usuario
// let nombre = prompt("Ingrese su nombre:");

// // Llamar a la función y obtener el saludo
// let saludo = saludar(nombre);

// // Mostrar el saludo en una alerta
// alert(saludo);


/*Escriba una función que reciba un número n como parámetro y genere su factorial.*/ 

// Función para calcular el factorial de un número
// function calcularFactorial(n) {
//     if (n === 0 || n === 1) {
//         return 1; // El factorial de 0 y 1 es 1
//     }
//     let factorial = 1;
//     for (let i = 2; i <= n; i++) {
//         factorial *= i; // Multiplica los números desde 2 hasta n
//     }
//     return factorial;
// }

// // Pedir el valor de n al usuario
// let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));

// // Validar que el usuario ingresó un número no negativo
// if (n >= 0) {
//     // Calcular el factorial y mostrar el resultado
//     let resultado = calcularFactorial(n);
//     alert(`El factorial de ${n} es: ${resultado}`);
// } else {
//     alert("Por favor, ingrese un número entero no negativo.");

/*Escriba una función la cual reciba como parámetro una cadena y genere como retorno
la misma cadena pero con todos su contenido en mayúscula.*/

// // Función para convertir una cadena a mayúsculas
// function convertirAMayusculas(cadena) {
//     return cadena.toUpperCase(); // Convierte la cadena a mayúsculas
// }

// // Pedir al usuario que ingrese una cadena
// let cadena = prompt("Ingrese una cadena:");

// // Llamar a la función y mostrar el resultado
// let resultado = convertirAMayusculas(cadena);
// alert(`La cadena en mayúsculas es: ${resultado}`);

/*Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad de vocales que contiene la cadena.*/

// Función para contar las vocales en una cadena
// function contarVocales(cadena) {
//     let contador = 0; // Inicializar el contador
//     const vocales = "aeiouAEIOU"; // Lista de vocales (minúsculas y mayúsculas)

//     // Recorrer la cadena para verificar cada carácter
//     for (let caracter of cadena) {
//         if (vocales.includes(caracter)) {
//             contador++; // Incrementar el contador si es una vocal
//         }
//     }

//     return contador; // Retornar el número total de vocales
// }

// // Pedir al usuario que ingrese una cadena
// let cadena = prompt("Ingrese una cadena:");

// // Llamar a la función y mostrar el resultado
// let cantidadVocales = contarVocales(cadena);
// alert(`La cantidad de vocales en la cadena es: ${cantidadVocales}`);

/*Escriba una función que reciba un número entero y dicha función pueda determinar si el número enviado es positivo o negativo.*/

// Función para determinar si un número es positivo o negativo
// function determinarSigno(numero) {
//     if (numero > 0) {
//         return `El número ${numero} es positivo.`;
//     } else if (numero < 0) {
//         return `El número ${numero} es negativo.`;
//     } else {
//         return `El número es cero (ni positivo ni negativo).`;
//     }
// }

// // Pedir al usuario que ingrese un número entero
// let numero = parseInt(prompt("Ingrese un número entero:"));

// // Llamar a la función y mostrar el resultado
// let mensaje = determinarSigno(numero);
// alert(mensaje);


/*Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena, La idea es que los números
recibidos se puedan operar según la operación que hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).*/

// Función para operar dos números según la operación especificada
// function miFuncion(num1, num2, operacion) {
//     let resultado;

//     // Determinar la operación a realizar
//     switch (operacion.toLowerCase()) {
//         case "suma":
//             resultado = num1 + num2;
//             break;
//         case "resta":
//             resultado = num1 - num2;
//             break;
//         case "multiplicacion":
//             resultado = num1 * num2;
//             break;
//         case "division":
//             if (num2 !== 0) {
//                 resultado = num1 / num2;
//             } else {
//                 return "Error: No se puede dividir entre cero.";
//             }
//             break;
//         default:
//             return "Operación no válida. Las operaciones disponibles son: suma, resta, multiplicacion, division.";
//     }

//     return `El resultado de la ${operacion} es: ${resultado}`;
// }

// // Solicitar datos al usuario
// let num1 = parseInt(prompt("Ingrese el primer número entero:"));
// let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
// let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division):");

// // Llamar a la función y mostrar el resultado
// let mensaje = miFuncion(num1, num2, operacion);
// alert(mensaje);


/*Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos funciones: 
calcularArea(largo, ancho): calcula el área del rectángulo. 
 calcularPerimetro(largo, ancho): calcula el perímetro.*/

// Función para calcular el área del rectángulo
// function calcularArea(largo, ancho) {
//     return largo * ancho;
// }

// // Función para calcular el perímetro del rectángulo
// function calcularPerimetro(largo, ancho) {
//     return 2 * (largo + ancho);
// }

// // Solicitar los valores de largo y ancho al usuario
// let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
// let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

// // Validar que los valores sean positivos
// if (largo > 0 && ancho > 0) {
//     // Calcular el área y el perímetro
//     let area = calcularArea(largo, ancho);
//     let perimetro = calcularPerimetro(largo, ancho);

//     // Mostrar los resultados
//     alert(`El área del rectángulo es: ${area.toFixed(2)}`);
//     alert(`El perímetro del rectángulo es: ${perimetro.toFixed(2)}`);
// } else {
//     alert("Por favor, ingrese valores positivos para el largo y el ancho.");
// }


/*Escriba un programa que calcule si un estudiante aprueba o reprueba con base en tres notas. Usa tres funciones: 
 calcularPromedio(notas): calcula el promedio de las tres notas. ● esAprobado(promedio): 
determina si el estudiante aprueba o no (promedio >= 6). 
 mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.*/

// Función para calcular el promedio de tres notas
// function calcularPromedio(notas) {
//     let suma = notas.reduce((total, nota) => total + nota, 0); // Suma todas las notas
//     return suma / notas.length; // Calcula el promedio
// }

// // Función para determinar si el estudiante aprueba
// function esAprobado(promedio) {
//     return promedio >= 6; // Retorna true si el promedio es >= 6, de lo contrario false
// }

// // Función para mostrar el resultado
// function mostrarResultado(aprobado) {
//     if (aprobado) {
//         alert("El estudiante aprueba.");
//     } else {
//         alert("El estudiante reprueba.");
//     }
// }

// // Solicitar las tres notas al usuario
// let notas = [];
// for (let i = 1; i <= 3; i++) {
//     let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
//     if (nota >= 0 && nota <= 10) {
//         notas.push(nota);
//     } else {
//         alert("Por favor, ingrese una nota válida entre 0 y 10.");
//         i--; // Repetir la solicitud para esta nota
//     }
// }

// // Calcular el promedio
// let promedio = calcularPromedio(notas);

// // Determinar si aprueba
// let aprobado = esAprobado(promedio);

// // Mostrar el resultado
// mostrarResultado(aprobado);