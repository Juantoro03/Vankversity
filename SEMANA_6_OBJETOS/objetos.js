// let estudiantes=[{nombre:"diego",edad:18,matricula:185,calificaciones:[1.9,2.8,4.8,4.0,5.0]},{nombre:"juan",edad:18,matricula:385,calificaciones:[4.1,2.9,3.3,4.1,2.5]},{nombre:"maria",edad:18,matricula:856,calificaciones:[4.1,5.0,3.1,4.8,3.2]}];

// function calcularPromedio(matricula){
//     let estudiante=estudiantes.find(x=>x.matricula=== matricula)
//     return console.log(`el promedio del estudiante ${estudiante.nombre} es: ${estudiante.calificaciones.reduce((x,y)=>x+y,0)/5}`) 
// }

// calcularPromedio(185)
// console.log(estudiantes[0])
// function actualizarCalificaciones(matricula,calificaciones){
//     let estudiante=estudiantes.find(x=>x.matricula===matricula)
//     estudiante.calificaciones=calificaciones


// }
// actualizarCalificaciones(185,[4.1,5.0,3.1,4.8,3.2])
// console.log(estudiantes[0])

// let personas=[{nombre:"juan",cedula:"1234"
//     ,cita:"6 noviembre a las 7:00 pm"},{nombre:"maria",cedula:"8657"
//         ,cita:"8 julio a las 10:00 am"}]
// function cita(cedula){
//     if(personas.find(x=>x.cedula===cedula)){
//         let persona=personas.find(x=>x.cedula===cedula)
//     console.log(persona)
//     let cambiar=prompt("desea cambiar su cita:(si-no)")
//     if(cambiar==="si"){
//         persona.cita=prompt("ingrese la nueva fecha y hora de su cita:")
//     }
//     alert(`señor ${persona.nombre} su cita esta agendada para el ${persona.cita}`)

//     }else{
//         alert("paciente no hecontrado")
//     }
    

// }

// cita(prompt("ingrese su cedula"))

// let productos=[ { nombre: "audifonos", stock: 200, umbral: 30 },  { nombre: "celular", stock: 100, umbral: 20 } ]


// function verificar(nombre){
//     let producto=productos.find(x=>x.nombre==nombre)
//     if(producto.stock<producto.umbral){
//         alert(`el stock del ${producto.nombre} se encuentra por debajo del umbral`)
//     }else{
//         alert(`el stock del ${producto.nombre} es ${producto.stock}`)
//     }
// }

// function actualizar(nombre,cantidad){
//     let operacion=cantidad.split('')
//     let producto=productos.find(x=>x.nombre==nombre)
    
//     if(operacion[0]==="+"){
//         let contador=""
//         for(var i=0;i<operacion.length;i++){
//             if(i!==0){
//                 contador+=operacion[i]
//             }
//         }
//          producto.stock+= parseInt(contador)
//          return alert(`el nuevo stock del producto es ${producto.stock}`)

//     }else if(operacion[0]==="-"){
//         let contador=""
//         for(var i=0;i<operacion.length;i++){
//             if(i!==0){
//                 contador+=operacion[i]
//             }
//         }

//         producto.stock-= parseInt(contador)
//         return alert(`el nuevo stock del producto es ${producto.stock}`)
        

//     }else{
//         alert("debes indicar la operacion a resolver")
//     }

// }


// actualizar("audifonos","+25")
// let productos=[{codigo:"12345",nombre:"camisa",categoria:"deportivos",precio:18000,cantidad:15},{codigo:"123456",nombre:"pantaloneta",categoria:"deportivos",precio:12000,cantidad:18}]

// function crud(funcion){
//     switch(funcion){
//         case "agregar":
//             let nombre=prompt("ingrese el nombre del producto")
//             let codigo=prompt("ingrese el codigo del producto")
//             let categoria=prompt("ingrese el categoria del producto")
//             let precio=parseInt(prompt("ingrese el precio del producto"))
//             let cantidad=parseInt(prompt("ingrese la cantidad del producto"))
//             if(productos.find(x=>x.codigo===codigo)===undefined){
                
//                 productos.push({codigo:codigo,nombre:nombre,categoria:categoria,precio:precio,cantidad:cantidad})
//                 console.log(productos)
//                 alert("producto agregado con exito")
                
//             }else{
//                 alert("el producto con el codigo ya esta agregado")

//             }
            
            
//             break;
//         case "consultar":
//             let codigoP=prompt("ingrese el codigo del producto")
//             alert(`el producto es ${Object.values(productos.find(x=>x.codigo===codigoP))}`)
//             break;
//         case "editar":
            
//             let codigoProducto=prompt("ingrese el codigo del producto")
//             let producto=productos.find(x=>x.codigo===codigoProducto)
//             let nombreE=prompt("ingrese el nombre del producto")
//             let codigoE=prompt("ingrese el codigo del producto")
//             let categoriaE=prompt("ingrese el categoria del producto")
//             let precioE=parseInt(prompt("ingrese el precio del producto"))
//             let cantidadE=parseInt(prompt("ingrese la cantidad del producto"))
//             producto={codigo:codigoE,nombre:nombreE,categoria:categoriaE,precio:precioE,cantidad:cantidadE}
//             console.log(producto)

//             break;
//         case "eliminar":
//             let codigoPro=prompt("ingrese el codigo del producto")
//             let index=productos.findIndex(c=>c.codigo===codigoPro)
//             console.log(index)
//             if(index!==-1){
//                 productos.splice(index,1)
//                 console.log(`producto eliminado${productos}`)
//                 console.log(productos)
//             }else{
//                 console.log("producto no encontrado")
//             }
            

//             break;
//         case "ver todos":
//             productos.map(x=>console.log(x))
//             break;
//     }
// }

// crud("eliminar")

// Objeto inicial
// const datos = { numeros: [45, 78, 22, 89, 8] };

// // Recorrer el valor de la clave "numeros"
// console.log("Valores en la clave 'numeros':");
// for (const numero of datos.numeros) {
//     console.log(numero);
// }

// Objeto inicial
// const personas = {
//     162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
//     4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
//     786353: { nombres: "Raul", apellidos: "Castro", edad: 80 }
// };

// // Recorrer el objeto principal
// for (const id in personas) {
//     console.log(`ID: ${id}`);
//     // Recorrer el objeto interno correspondiente a cada ID
//     for (const clave in personas[id]) {
//         console.log(`${clave}: ${personas[id][clave]}`);
//     }
//     console.log("---------"); // Separador entre personas
// }

 // Objeto para almacenar documentos y nombres de los usuarios
// const usuarios = {
//     1001: "Juan Pérez",
//     1002: "Ana Gómez",
//     1003: "Carlos Ramírez",
//     1004: "María López",
//     1005: "Pedro Martínez",
//     1006: "Laura Torres",
//     1007: "José Hernández",
//     1008: "Elena Vargas",
//     1009: "Luis Castillo",
//     1010: "Sofía Díaz"
// };

// // Imprimir todos los nombres de los usuarios usando un ciclo
// console.log("Nombres de los usuarios:");
// for (const documento in usuarios) {
//     console.log(usuarios[documento]);
// }

/*Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se
requiere un programa donde el usuario pueda consultar el día de su cita mediante su
documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe
mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el
programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó
fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que
el cambio solicitado ha sido exitoso.*/

// Objeto que gestiona las citas médicas
// const gestionCitas = {
//     citas: [
//         {
//             documento: "12345678",
//             nombres: "Juan Pérez",
//             dia: "Lunes",
//             hora: "10:00 AM"
//         },
//         {
//             documento: "87654321",
//             nombres: "María López",
//             dia: "Miércoles",
//             hora: "2:00 PM"
//         },
//         {
//             documento: "11223344",
//             nombres: "Carlos Gómez",
//             dia: "Viernes",
//             hora: "9:00 AM"
//         }
//     ],

//     // Método para consultar cita por documento
//     consultarCita: function (documento) {
//         const cita = this.citas.find(c => c.documento === documento);

//         if (!cita) {
//             alert("No se encontró una cita con ese documento.");
//             console.log("No se encontró una cita con ese documento.");
//             return;
//         }

//         // Mostrar información de la cita
//         const mensajeCita = `Hola ${cita.nombres}, tu cita es el ${cita.dia} a las ${cita.hora}.`;
//         alert(mensajeCita);
//         console.log(mensajeCita);

//         // Preguntar si desea cambiar el día u hora
//         const deseaCambiar = confirm("¿Deseas cambiar el día u hora de tu cita?");
//         if (deseaCambiar) {
//             const nuevoDia = prompt("Ingresa el nuevo día para tu cita:");
//             const nuevaHora = prompt("Ingresa la nueva hora para tu cita:");

//             // Actualizar los datos de la cita
//             cita.dia = nuevoDia;
//             cita.hora = nuevaHora;

//             const mensajeCambio = `El cambio de cita fue exitoso. Tu nueva cita es el ${cita.dia} a las ${cita.hora}.`;
//             alert(mensajeCambio);
//             console.log(mensajeCambio);
//         } else {
//             alert("No se realizaron cambios en tu cita.");
//             console.log("No se realizaron cambios en tu cita.");
//         }
//     }
// };

// // Ejecutamos
// const documentoUsuario = prompt("Ingresa tu documento para consultar la cita:");
// console.log(`Documento ingresado: ${documentoUsuario}`);
// gestionCitas.consultarCita(documentoUsuario);

// class Vehiculo {
//     constructor(marca, placa, horaEntrada) {
//         this.marca = marca;
//         this.placa = placa;
//         this.horaEntrada = horaEntrada;
//     }
// }

// class Parqueadero {
//     constructor() {
//         this.vehiculos = [];
//         this.costoPorHora = 2500;
//     }

//     // Agregar un vehículo al parqueadero
//     ingresarVehiculo() {
//         const marca = prompt("Ingrese la marca del vehículo:");
//         const placa = prompt("Ingrese la placa del vehículo:");
//         const horaEntrada = new Date();

//         if (this.vehiculos.some(vehiculo => vehiculo.placa === placa)) {
//             alert(" Un vehículo con esta placa ya está registrado en el parqueadero.");
//             console.log("Error: Placa duplicada.");
//             return;
//         }

//         const nuevoVehiculo = new Vehiculo(marca, placa, horaEntrada);
//         this.vehiculos.push(nuevoVehiculo);
//         alert(` Vehículo ${marca} con placa ${placa} ingresado a las ${horaEntrada.toLocaleTimeString()}.`);
//         console.log(`Vehículo ingresado: Marca: ${marca}, Placa: ${placa}, Hora de entrada: ${horaEntrada.toLocaleTimeString()}`);
//     }

//     // Retirar un vehículo y calcular el costo
//     retirarVehiculo() {
//         const placa = prompt("Ingrese la placa del vehículo que desea retirar:");
//         const indice = this.vehiculos.findIndex(vehiculo => vehiculo.placa === placa);

//         if (indice !== -1) {
//             const vehiculo = this.vehiculos[indice];
//             const horaSalida = new Date();
//             const tiempoEstacionado = Math.floor((horaSalida - vehiculo.horaEntrada) / (1000 * 60 * 60));
//             const minutosEstacionados = Math.floor(((horaSalida - vehiculo.horaEntrada) % (1000 * 60 * 60)) / (1000 * 60));
//             const costo = tiempoEstacionado * this.costoPorHora;

//             this.vehiculos.splice(indice, 1); // Eliminar el vehículo del parqueadero

//             alert(
//                 ` Vehículo retirado:\n` +
//                 `Marca: ${vehiculo.marca}\n` +
//                 `Placa: ${vehiculo.placa}\n` +
//                 `Tiempo estacionado: ${tiempoEstacionado} horas y ${minutosEstacionados} minutos\n` +
//                 `Total a pagar: $${costo}`
//             );

//             console.log(
//                 `Vehículo retirado: Marca: ${vehiculo.marca}, Placa: ${vehiculo.placa}, ` +
//                 `Tiempo estacionado: ${tiempoEstacionado} horas y ${minutosEstacionados} minutos, Total a pagar: $${costo}`
//             );
//         } else {
//             alert(" No se encontró un vehículo con la placa ingresada.");
//             console.log("Error: Vehículo no encontrado.");
//         }
//     }

//     // Mostrar todos los vehículos en el parqueadero
//     mostrarVehiculos() {
//         if (this.vehiculos.length === 0) {
//             alert("El parqueadero está vacío.");
//             console.log("El parqueadero está vacío.");
//         } else {
//             console.log("Vehículos en el parqueadero:");
//             this.vehiculos.forEach((vehiculo, index) => {
//                 console.log(
//                     `(${index + 1}) Marca: ${vehiculo.marca}, Placa: ${vehiculo.placa}, Hora de entrada: ${vehiculo.horaEntrada.toLocaleTimeString()}`
//                 );
//             });
//             alert("Consulta la consola para ver los vehículos registrados.");
//         }
//     }

//     // Menú interactivo
//     mostrarMenu() {
//         let continuar = true;

//         while (continuar) {
//             const opcion = prompt(
//                 "Seleccione una opción:\n" +
//                 "1. Ingresar vehículo\n" +
//                 "2. Retirar vehículo\n" +
//                 "3. Mostrar vehículos\n" +
//                 "4. Salir"
//             );

//             switch (opcion) {
//                 case "1":
//                     this.ingresarVehiculo();
//                     break;
//                 case "2":
//                     this.retirarVehiculo();
//                     break;
//                 case "3":
//                     this.mostrarVehiculos();
//                     break;
//                 case "4":
//                     continuar = false;
//                     alert("Saliendo del sistema del parqueadero.");
//                     break;
//                 default:
//                     alert("Opción no válida. Intente nuevamente.");
//             }
//         }
//     }
// }

// // Crear instancia del parqueadero y mostrar el menú
// const miParqueadero = new Parqueadero();
// miParqueadero.mostrarMenu();


// Lista de habitaciones
// const habitaciones = [
//     { numero: 101, tipo: "Suite", disponible: true, reservas: [] },
//     { numero: 102, tipo: "Doble", disponible: true, reservas: [] },
//     { numero: 103, tipo: "Normal", disponible: true, reservas: [] },
//     { numero: 104, tipo: "Suite", disponible: true, reservas: [] },
//     { numero: 105, tipo: "Doble", disponible: false, reservas: [{ cliente: "Juan Pérez", diasReservados: 3 }] },
//     { numero: 106, tipo: "Normal", disponible: false, reservas: [{ cliente: "Ana López", diasReservados: 2 }] }
// ];

// // Función para reservar una habitación
// function reservarHabitacion(cliente, dias, tipoHabitacion) {
//     const habitacion = habitaciones.find(h => h.tipo === tipoHabitacion && h.disponible);
//     if (!habitacion) {
//         alert(` No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
//         console.log(`Error: No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
//         return;
//     }

//     habitacion.reservas.push({ cliente, diasReservados: dias });
//     habitacion.disponible = false;
//     alert(` Habitación ${habitacion.numero} de tipo ${tipoHabitacion} reservada por ${dias} días a nombre de ${cliente}.`);
//     console.log(`Habitación reservada: Número: ${habitacion.numero}, Tipo: ${tipoHabitacion}, Cliente: ${cliente}, Días: ${dias}`);
// }

// // Función para cancelar una reserva
// function cancelarReserva(cliente) {
//     const habitacion = habitaciones.find(h => h.reservas.some(r => r.cliente === cliente));
//     if (!habitacion) {
//         alert(` No se encontró una reserva a nombre de ${cliente}.`);
//         console.log(`Error: Reserva no encontrada para el cliente ${cliente}.`);
//         return;
//     }

//     habitacion.reservas = habitacion.reservas.filter(r => r.cliente !== cliente);
//     if (habitacion.reservas.length === 0) {
//         habitacion.disponible = true; // Si no quedan reservas, la habitación vuelve a estar disponible
//     }

//     alert(` Reserva a nombre de ${cliente} cancelada para la habitación ${habitacion.numero}.`);
//     console.log(`Reserva cancelada: Cliente: ${cliente}, Habitación: ${habitacion.numero}`);
// }

// // Función para listar habitaciones disponibles por tipo
// function habitacionesDisponibles(tipoHabitacion) {
//     const disponibles = habitaciones.filter(h => h.disponible && h.tipo === tipoHabitacion);
//     if (disponibles.length === 0) {
//         alert(` No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
//         console.log(`No hay habitaciones disponibles de tipo ${tipoHabitacion}.`);
//         return;
//     }

//     console.log(`Habitaciones disponibles de tipo ${tipoHabitacion}:`);
//     disponibles.forEach(h => console.log(`Número: ${h.numero}`));
//     alert(`Consulta la consola para ver las habitaciones disponibles de tipo ${tipoHabitacion}.`);
// }

// // Función para mostrar todas las habitaciones y su estado
// function mostrarHabitaciones() {
//     console.log("Estado actual de las habitaciones:");
//     habitaciones.forEach(h => {
//         console.log(
//             `Número: ${h.numero}, Tipo: ${h.tipo}, Disponible: ${h.disponible ? "Sí" : "No"}, Reservas: ${h.reservas.length}`
//         );
//     });
//     alert("Consulta la consola para ver el estado de todas las habitaciones.");
// }

// // Menú interactivo
// function menuHotel() {
//     let continuar = true;

//     while (continuar) {
//         const opcion = prompt(
//             "Seleccione una opción:\n" +
//             "1. Reservar habitación\n" +
//             "2. Cancelar reserva\n" +
//             "3. Listar habitaciones disponibles por tipo\n" +
//             "4. Mostrar todas las habitaciones\n" +
//             "5. Salir"
//         );

//         switch (opcion) {
//             case "1":
//                 const cliente = prompt("Ingrese el nombre del cliente:");
//                 const dias = parseInt(prompt("Ingrese la cantidad de días a reservar:"), 10);
//                 const tipo = prompt("Ingrese el tipo de habitación (Suite, Doble, Normal):");
//                 reservarHabitacion(cliente, dias, tipo);
//                 break;
//             case "2":
//                 const clienteCancelar = prompt("Ingrese el nombre del cliente para cancelar la reserva:");
//                 cancelarReserva(clienteCancelar);
//                 break;
//             case "3":
//                 const tipoConsulta = prompt("Ingrese el tipo de habitación a consultar (Suite, Doble, Normal):");
//                 habitacionesDisponibles(tipoConsulta);
//                 break;
//             case "4":
//                 mostrarHabitaciones();
//                 break;
//             case "5":
//                 continuar = false;
//                 alert("Saliendo del sistema de reservas del hotel.");
//                 break;
//             default:
//                 alert("Opción no válida. Intente nuevamente.");
//         }
//     }
// }

// // Ejecutar el menú principal
// menuHotel();