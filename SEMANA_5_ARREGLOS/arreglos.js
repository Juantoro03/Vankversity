// arreglos bidimiensionales son aquellos que contienen arreglos 


// function cambiar(nombres){
//     let upper=[]
//     for(let i=0;i<nombres.length;i++){
//         upper.push(nombres[i].toUpperCase())
//     }

//     return upper
// }
// console.log(cambiar(['maria','raul','pedro']))

//programacion imperativa es aquella que muestra de una forma detallada como funciona un script
// y la programacion declarativa es aquella que hace una tarea pero no demuestra como 

// function enteros(numeros){
//     let impares=[]
//     for(let i=0; i<numeros.length; i++){
//         if(numeros[i]%2!==0){
//             impares.push(numeros[i])
//         }
//     }
//     return impares
// }

// console.log(enteros([1,2,3,4,5]))

// function imperativa(numeros){
//     let impares=numeros.filter(n=>n%2!==0)
//     return impares
// }
// console.log(imperativa([1,2,3,4,5]))

// function suma(numeros){
//     let resultado = 0;
//     for(let i=0; i<numeros.length;i++){
//         resultado += numeros[i]
//     }
//     return resultado
// }
// console.log(suma([1,2,3,4,5]))

// function filtro(personas){
//     return ` las personas mayores de 18 son:${personas.filter(personas=>personas.edad>18).map(personas=>personas.edad)} y la suma de las edades es ${personas.reduce((acumulador,personas)=>acumulador+personas.edad,0)}`
// }
// console.log(filtro([ 
//     {nombre: "Pepe", edad: 18},
//     {nombre: "Maria", edad: 30},
//     {nombre: "Pablo", edad: 45}
//    ]))

function cuadrados(numeros){
    let resultado= numeros.filter(n=>n%2!=0).reduce((acumulador, valor) =>acumulador+(valor*valor),0)
    return resultado
}
console.log(cuadrados([1,2,3]))