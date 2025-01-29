//#1
// const miPromesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promesa cumplida");
//     }, 2000); 
// });

// miPromesa.then((mensaje) => {
//     console.log(mensaje); 
// }).catch((error)=>{
//     console.log(error)
// });

// #2
// const miPromesa = (number)=>{
//     return new Promise((resolve,reject)=>{
//         if(number>0.4){
//             resolve("promesa cumplida")
//         }else{
//             reject("promesa rechazada")
//         }
//     })

// };

// miPromesa(0.3).then((resolve)=>{
//     console.log(resolve)

// }).catch((error)=>{
//     console.log(error)
// })

// #3
// const esperarUnSegundo = (mensaje) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(mensaje);
//             resolve();
//         }, 1000); // 1 segundo
//     });
// };

// esperarUnSegundo("Paso 1 completado")
//     .then(() => esperarUnSegundo("Paso 2 completado"))
//     .then(() => esperarUnSegundo("Paso 3 completado"))
//     .then(() => console.log("Todos los pasos han sido completados"));


// #4

// const crearPromesa = (mensaje, tiempo) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(mensaje);
//         }, tiempo);
//     });
// };

// const promesa1 = crearPromesa("Promesa 1 resuelta", 1000); 
// const promesa2 = crearPromesa("Promesa 2 resuelta", 2000); 
// const promesa3 = crearPromesa("Promesa 3 resuelta", 3000); 


// Promise.all([promesa1, promesa2, promesa3])
//     .then((resultados) => {
//         console.log("Todas las promesas se han resuelto:");
//         console.log(resultados); 
//     })
//     .catch((error) => {
//         console.error("Ocurrió un error:", error);
//     });

// #5

// const crearPromesa = (mensaje, tiempo) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(mensaje);
//         }, tiempo);
//     });
// };


// const promesaRapida = crearPromesa("Promesa rápida resuelta en 2s", 2000); 
// const promesaLenta = crearPromesa("Promesa lenta resuelta en 5s", 5000); 


// Promise.race([promesaRapida, promesaLenta])
//     .then((resultado) => {
//         console.log("La primera promesa resuelta es:",resultado);

//     })
//     .catch((error) => {
//         console.error("Ocurrió un error:", error);
//     });

// #6
// const saludar = async () => {
//     return "hola, mundo";
// }

// const ejecutar = async () => {
//     const mensaje = await saludar()
//     console.log(mensaje)
// };

// ejecutar();


// #7

// async function proceso(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("proceso terminado")},3000)

//     })
    
// }

// const llamar=async ()=>{
//     const mensaje=await proceso()
//     console.log(mensaje)

// }
// llamar()

// #8
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// let nombres=["maria","juan","valeria","laura"]

// async function procesarNombres(nombres) {
//     for (const nombre of nombres) {
//     await delay(1000);
//     console.log(`Procesado: ${nombre}`);
//     }
// }

// procesarNombres(nombres)


// #9

const buscar = async (nombre) => {
    const tiempo = Math.floor(Math.random() * 2000) + 1000; 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resultado de la búsqueda: ${nombre}`);
        }, tiempo);
    });
};


const realizarBusquedas = async () => {
    const busquedas = [
        buscar("Usuario 1"),
        buscar("Usuario 2"),
        buscar("Usuario 3"),
    ];

    const resultados = await Promise.all(busquedas);

    console.log("Todas las búsquedas completadas:");
    console.log(resultados);
};

realizarBusquedas();