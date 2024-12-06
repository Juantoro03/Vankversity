// 1. Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
// edad o no.

// let edad=parseInt(prompt("ingresa tú edad"))

// let mensaje=edad>17? "eres mayor de edad":"eres menor de edad"
// alert(mensaje)

// 2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
// pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
// mencionados y muestre

// let producto=prompt("ingrese un producto:(lentejas, crema, arroz, vino)")
// let mensaje;
// switch(producto){
//     case "lentejas":
//         mensaje= "no tienes iva"
        
//         break;
//     case "arroz":
//         mensaje= "no tienes iva"
        
//         break;
    
//     case "crema":
//         mensaje= " tienes iva"
        
//         break;
    
//     case "vino":
//         mensaje= " tienes iva"
        
//         break;
       
// }
// alert(mensaje)


// 3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
// también se debe mostrar al usuario.

// let n1=parseFloat(prompt("ingrese un numero"));
// let n2=parseFloat(prompt("ingrese un numero"));
// let resultado;
// if(n1>n2){
//     resultado=`${n1} es mayor que ${n2}`

// }else if(n1<n2){
//     resultado=`${n1} es menor que ${n2}`

// }else{
//     resultado=`${n1} es igual que ${n2}`
// }
// alert(resultado)

// 4. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
// triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.

// let a1=parseFloat(prompt("ingrese el aguno 1:"))
// let a2=parseFloat(prompt("ingrese el aguno 2:"))
// let a3=parseFloat(prompt("ingrese el aguno 3:"))

// if(a1+a2+a3==180){
//     alert("es un triangulo")
// }else{
//     alert("no es un angulo") 
// }
/*Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/

 //---------------Versión con condicionales---------------
// let numero_condicional = Number(prompt("Ingrese un número:"));

// if (isNaN(numero_condicional)) {
//   alert("Por favor, ingresa un número válido.");
// } else if (numero_condicional % 2 === 0) {
//   alert("El número " + numero_condicional + " es par.");
// } else {
//   alert("El número " + numero_condicional + " es impar.");
// }


 //---------------Versión con switch-case---------------
// let numero_switch = Number(prompt("Ingrese un número:"));

// switch (true) {
//   case isNaN(numero_switch):
//     alert("Por favor, ingresa un número válido.");
//     break;
//   case numero_switch % 2 === 0:
//     alert("El número " + numero_switch + " es par.");
//     break;
//   default:
//     alert("El número " + numero_switch + " es impar.");

/*Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

//---------------Versión con condicionales---------------
// let numero_condicional = Number(prompt("Ingrese un número:"));

// if (isNaN(numero_condicional)) {
//   alert("Por favor, ingresa un número válido.");
// } else if (numero_condicional % 5 === 0) {
//   alert("El número " + numero_condicional + " es divisible entre 5.");
// } else {
//   alert("El número " + numero_condicional + " NO es divisible entre 5.");
// }


// //---------------Versión con switch-case---------------
// let numero_switch = Number(prompt("Ingrese un número:"));

// switch (true) {
//   case isNaN(numero_switch):
//     alert("Por favor, ingresa un número válido.");
//     break;
//   case numero_switch % 5 === 0:
//     alert("El número " + numero_switch + " es divisible entre 5.");
//     break;
//   default:
//     alert("El número " + numero_switch + " NO es divisible entre 5.");
// }