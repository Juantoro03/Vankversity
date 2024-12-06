// 5. Cree un programa que genera las tablas de multiplicar  de 1 a 10 de los primeros 5 numeros naturales

// for(let x=1;x<=5;x++){
//     for(let i=1;i<=10;i++){
//         console.log(`${x}x${i}=${x*i}`)
//     }
// }

// let saludo=(nombre)=>"hola"+nombre

// console.log(saludo("juan"))

// function secuencia(cadena="xyz"){
//     let x="";
//     let y="";
//     let z="";

//     for(let i=0;i<3;i++){
//         for(let j=0;j<3;j++){
//             if(i==0){
//                 x+=cadena[i]+cadena[j]+" "
//             }else if(i==1){
//                 y+=cadena[i]+cadena[j]+" "
//             }else{
//                 z+=cadena[i]+cadena[j]+" "
//             }
            

//         }
//     }
    
//     console.log(x)
//     console.log(y)
//     console.log(z)
    
    
// }
// secuencia()

// function n(a,b){
//     while(b!==0){
//         let temp=b
//         b=a%b
//         a=temp
//     }
//     return a
// }
// console.log(n(33,114))

// function cadena(texto){
//     let textoI=""
//     for(let i=texto.length-1;i>=0;i--){
//         textoI+=texto[i]
//     }
//     return textoI

// }

// console.log(cadena("vankVersity"))

// function texto(text){

//     let cadena=""
//     for(let i=0;i<text.length;i++){
//         if(text[i]===text[i-1]){
//             cadena+=text[i]
//         }


//     }
//     return cadena

// }

// console.log(texto("zzxxmmllss"))


// function funcion(n){
//     let r=""
//     for(let x=0;x<n;x++){
//         if(x%2==0 && x%3==0){
//             r=r+" "+x
//         }else{
//             r=r+" "+0
//         }
//     }
//     return r

// }
// console.log(funcion(25))


// function x(num){
//     let acu=1
//     for(let n=1;n<num;n++){
//         if(n%2==0){
//             acu=acu*n
//         }else{
//             acu=acu+n
//         }
//     }
//     return acu
// }
// console.log(x(6))

// "s" para sumar

// "r" para restar

// "m" para multiplicar

// "d" para dividir

// "c" para realizar una cuenta regresiva de n hasta 0 (n debe ser ingresado por el usuario)

// "p" para verificar si es divisible por 2 y 3

// "x" para salir

let operacion=prompt("ingrese la operacion a realizar:")


switch(operacion){
    case "s":
        let s1=parseFloat(prompt("ingrese un numero:"));
        let s2=parseFloat(prompt("ingrese un numero:"));
        
        let suma=(n1,n2)=>{
            
            return n1+n2
        }
        console.log(suma(s1,s2))
        break;
    case "r":
        let r1=parseFloat(prompt("ingrese un numero:"));
        let r2=parseFloat(prompt("ingrese un numero:"));
        
        let resta=(n1,n2)=>{
            return n1-n2
        }
        console.log(resta(r1,r2))
        break;
    case "m":
        let m1=parseFloat(prompt("ingrese un numero:"));
        let m2=parseFloat(prompt("ingrese un numero:"));
        let multiplicacion=(n1,n2)=>{
            return n1*n2
        }
        console.log(multiplicacion(m1,m2))
        break;
    case "d":
        let d1=parseFloat(prompt("ingrese un numero:"));
        let d2=parseFloat(prompt("ingrese un numero:"));
        let division=(n1,n2)=>{
            if(n2!==0){
                return n1/n2
            }else{
                "no puedes divir por 0"
            }
            
        }
        console.log(division(s1,s2))
        break;
    case "c":
        let c=parseInt(prompt("ingrese un numero:"));
        let cuenta=(n)=>{
            for(let x=n;x>=0;x--){
                console.log(x)
            }
        }
        console.log(cuenta(c))
        break;
    case "p":
        let mod=parseInt(prompt("ingrese un numero:"));
        let modulo=(n)=>{
            if(n%2==0 && n%3==0){
                return "si es divisible por 2 y 3"
            }else{
                return "no es divisible por 2 y 3"
            }
            
        }
        console.log(modulo(mod))
        break;
    case "x":
        console.log("fin")
        break;
        
        
}