// 1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
// dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
// cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.

// let edad_actual=parseInt(prompt("Ingresa tu edad actual:"));
// let edad_esperada=parseInt(prompt("ingresa la cantidad de años que deseas saber:"));
// alert(`dentro de ${edad_esperada} años tendras ${edad_actual+edad_esperada}`)

// 2. Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
// suma y su resta.

// let n1=parseFloat(prompt("ingresa el primer número:"));
// let n2=parseFloat(prompt("ingresa el segundo número:"));
// alert(` suma: ${n1+n2} \n resta: ${n1-n2} \n producto: ${n1*n2} \n cociente: ${n1/n2} \n modulo: ${n1%n2}`);


// 3. En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
// compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
// crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
// electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
// mensuales que deberá pagar por el electrodoméstico.

// let valor_e=parseFloat(prompt("ingrese el valor del electrodomestico:"));
// let metodo_pago=prompt("ingrese el metodo de pago:  (credito-contado)");

// if(metodo_pago==="credito"){
    // let cuotas=parseInt(prompt("ingrese el numero de cuotas de la compra:"));
    // let total_cuota=valor_e/cuotas +(valor_e*0.05);
    // alert(` el valor de la cuota es de ${total_cuota}`)

// }else{
//     alert(`el total a pagar en contado es de ${valor_e}`)
// }

// 4. Cree un programa que tome la base y la altura de un triángulo e imprima su área.

// let base=parseFloat(prompt("ingrese el valor del area:"));
// let altura=parseFloat(prompt("ingrese el valor de la altura:"))
// alert(`el area del triangulo es:${base*altura/2}`)

// 5. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.

// let radio=parseFloat(prompt("ingrese el radio del circulo:"));
// alert(`el area del circulo es: ${3.14*(radio*radio)}`)

// 6. Cree un programa que tome el lado de un cubo e imprima su volumen.

// let lado=parseFloat(prompt("ingrese un lado del cubo:"))
// alert(`el volumen del cubo es ${Math.pow(lado,3)}`)

// 7. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
// con un IVA de 19%.

// let valor=parseFloat(prompt("ingrese el valor del producto:"))
// alert(`el valor final con el iva es de: ${valor+(valor*0.19)}`)

// 8. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
// siempre un descuento del 10%.

// let valor=parseFloat(prompt("ingrese el valor del producto:"))
// alert(`el valor final con el descuento es de: ${valor-(valor*0.1)}`)

// 9. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
// esa cantidad.

// let cantidad=parseFloat(prompt("ingrese la cantidad:"));
// let porcentaje=parseFloat(prompt("ingrese el porcentaje que desea conocer:"));

// alert(`el ${porcentaje}% de ${cantidad} es ${cantidad*porcentaje/100}`);

// 10. Cree un programa que tome un número real e imprima su valor absoluto.
// let valor=parseFloat(prompt("ingrese un valor:"));
// let valor_absoluto=valor<0 ? valor*-1: valor;
// alert(`el valor absoluto de ${valor} es: ${valor_absoluto}`)

// 11. Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
// resultados

// let d1= Math.floor(Math.random()*12)+1;
// let d2= Math.floor(Math.random()*12)+1;
// alert(`el resultado del lanzamiento de los dos dados (${d1}) (${d2}) es ${d1+d2}`)

// 12. Cree un programa que realice la conversión de grados Celsius a Fahrenheit

// let grados_c=parseFloat(prompt("ingrese los grados celsius:"));
// let grados_f=grados_c*1.8+32
// alert(`el equivalente de celsius a fahrenheit es :${grados_f}`)

// 13. Cree un programa que calcule el factorial de 5


// function factorial(n){

//     if(n<0){
//         return "no existe el de un numero negativo"

//     }else if(n==0){
//         return 1
//     }else{
//         return (n*factorial(n-1))
//     }
    
// }
// alert(`el factorial es ${factorial(0)}`)

// 14. Cree un programa que genere un número aleatorio dentro de un rango específico.

// let n1=parseInt(prompt("ingrese el numero menor del rango:"))
// let n2=parseInt(prompt("ingrese el numero mayor del rango:"))
// let n_random=n1<n2 && n1 && n2 !=0 ? Math.floor(Math.random()*(n2-n1))+n1 : "no indicaste un rango"
// alert(`el numero aleatorio entre ${n1} y ${n2} es: ${n_random}`)

// 15. Cree un programa que calcule horas y minutos a partir de segundos.

// let segundos=parseInt(prompt("ingrese la cantidad de segundos:"))
// let minutos=0;
// let horas=0;

// let calculo_minutos=segundos/60;
// minutos=parseInt(calculo_minutos)
// let calculo_horas=minutos/60
// horas=parseInt(calculo_horas)
// minutos=minutos%60
// segundos=segundos%60;

// alert(`${segundos} equivalen a ${horas}h y ${minutos}m y ${segundos}s`)


// 16. Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación
// cuadrática correspondiente.

/* let a=parseFloat(prompt("ingrese el valor de a mayor a cero"));
let b=parseFloat(prompt("ingrese el valor de b"))
let c=parseFloat(prompt("ingrese el valor de c"))

if((b*b)-4*a*c>0){
    let resultado=-b+Math.sqrt((b*b)-4*a*c>=0)/2*a
    alert(`el resultado es +-${ resultado}`)
}else{
    alert("no se puede obtener la raiz de un numero negativo") 
} */

