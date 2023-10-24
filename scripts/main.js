
// Declaración de variables:

let nombreCaso = "";
let avaluo = 0;
let porcentaje = 0;
let caso = {};

// Definición de la función que realiza el cálculo de la cuantía:

function calcularCuantia (avaluo, porcentaje) {
  if (avaluo !== NaN && porcentaje !== NaN) {
    return (avaluo * porcentaje) / 100;
  }
  return NaN;
}

// Introducción al programa

alert("Bienvenido(a) - Este servicio le ayudará a saber a cuál tipo de juzgado le corresponde tramitar su proceso de pertenencia en Colombia.");

let respuestaContinuar = prompt("¿Desea realizar un cálculo de competencia judicial? Responda Si / No");

// Definición del Array que tendrá como elementos los casos (objetos) introducidos por el usuario en la consulta

const listaCasos = [];

//  Ciclo de introducción de datos y cálculo de cuantía 

while (respuestaContinuar.toUpperCase() === "SI") {
  alert("Por favor responda las siguientes preguntas:");
 
// Solicitud de información al usuario.

    nombreCaso = prompt("¿Cuál es nombre del predio a reclamar? O indique el nombre con que se conoce su caso"),
    avaluo = parseFloat(prompt("¿Cuál es avalúo catastral del inmueble que pretende o el de mayor extensión? Escriba el valor en pesos colombianos. Use números, sin puntos, comas u otros signos")),
    porcentaje = parseFloat (prompt("¿Cuál es el porcentaje que ocupa el predio que usted pretende en posesión? Escriba un valor del 0 al 100"))
   
// Cálculo de las cuantías que definen la competencia judicial. (*Con cada resultado solicité impresión de los resultados numéricos en la consola para verificar el funcionamiento de la función.)

let cuantia = calcularCuantia (avaluo, porcentaje)

    if (cuantia !== NaN) {
      if (cuantia <= 46400000){
            cuantiaCaso = "Mínima Cuantía"
            alert("El proceso llamado " + nombreCaso + 
            " se cataloga de Mínima Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal o de Pequeñas Causas")
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
          } else if (46400000 < cuantia && cuantia <= 174000000){
            cuantiaCaso = "Menor Cuantía"
            alert("El proceso llamado " + nombreCaso + 
            " se cataloga de Menor Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal");
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia ); 
          } else if (174000000 < cuantia){
            cuantiaCaso = "Mayor Cuantía"
            alert("El proceso llamado " + nombreCaso + 
            " se cataloga de Mayor Cuantía - Le corresponde radicar el proceso en un Juzgado del Circuito");
            console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia );
          } else {
            alert("No se puede procesar la solicitud"); 
          }
    }

// Formación del objeto que hará parte del array.

    caso = {
      nombreCaso,
      cuantia,
      cuantiaCaso
      }

// Método que agrega el nuevo objeto al array.

    listaCasos.push(caso);
    
// Se imprime el array modificado en la consola.

    console.log(listaCasos);
    
// Opción para realizar un nuevo cálculo de jurisdicción o terminar.

    respuestaContinuar = prompt("¿Desea realizar otro cálculo de competencia judicial? Responda Si / No"); 
} 
// Fin del bucle

// Filtrado del array final para determinar la cantidad de casos por cuantía

const casosMinimaCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mínima Cuantía")
const casosMenorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Menor Cuantía")
const casosMayorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mayor Cuantía")

// Impresión de los resultados del filtrado

console.log("La cantidad de casos de Mínima cuantía es: " + casosMinimaCuantia.length);
console.log("La cantidad de casos de Menor cuantía es: " + casosMenorCuantia.length);
console.log("La cantidad de casos de Mayor cuantía es: " + casosMayorCuantia.length);

alert("La cantidad de casos de Mínima cuantía es: " + casosMinimaCuantia.length + "\n" + "La cantidad de casos de Menor cuantía es: " + casosMenorCuantia.length + "\n" + "La cantidad de casos de Mayor cuantía es: " + casosMayorCuantia.length);

alert("Gracias por elegirnos");

