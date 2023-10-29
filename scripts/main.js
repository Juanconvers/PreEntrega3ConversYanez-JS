
// Declaración de variables y sus correspondientes entradas (input):

let nombreCaso = document.getElementById("nombreCaso");
let avaluo = document.getElementById("avaluo");
let porcentaje = document.getElementById("porcentaje");

let caso = {};
let cuantia = 0;

const botonCalcular = document.getElementById(calcular);


// Definición de la función que realiza el cálculo de la cuantía:

function calcularCuantia(avaluo, porcentaje) {
  if (nombreCaso !== "" && avaluo !== "" && porcentaje !== "") {
    cuantia = (avaluo * porcentaje) / 100;
    console.log("cuantia")
  }
  return NaN;
}

// Definición del Array que tendrá como elementos los casos (objetos) introducidos por el usuario en la consulta

const listaCasos = [];

//  Función para el cálculo de cuantía 

botonCalcular.addEventListener("click", calcularCuantia);

cuantia = calcularCuantia(avaluo, porcentaje)

if (cuantia !== NaN) {
  if (cuantia <= 46400000) {
    cuantiaCaso = "Mínima Cuantía"
    alert("El proceso llamado " + nombreCaso +
      " se cataloga de Mínima Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal o de Pequeñas Causas")
    console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia);
  } else if (46400000 < cuantia && cuantia <= 174000000) {
    cuantiaCaso = "Menor Cuantía"
    alert("El proceso llamado " + nombreCaso +
      " se cataloga de Menor Cuantía - Le corresponde radicar el proceso en un Juzgado Municipal");
    console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia);
  } else if (174000000 < cuantia) {
    cuantiaCaso = "Mayor Cuantía"
    alert("El proceso llamado " + nombreCaso +
      " se cataloga de Mayor Cuantía - Le corresponde radicar el proceso en un Juzgado del Circuito");
    console.log("Avalúo catastral ingresado: $" + avaluo + ". Porcentaje sobre el avalúo:" + porcentaje + "% . Cuantía de la pretensión: $" + cuantia);
  } else {
    alert("No se puede procesar la solicitud");
  }
}

// Cálculo de las cuantías que definen la competencia judicial. (*Con cada resultado solicité impresión de los resultados numéricos en la consola para verificar el funcionamiento de la función.)

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

// Fin del bucle

// Filtrado del array final para determinar la cantidad de casos por cuantía

const casosMinimaCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mínima Cuantía")
const casosMenorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Menor Cuantía")
const casosMayorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mayor Cuantía")

// Impresión de los resultados del filtrado

console.log("La cantidad de casos de Mínima cuantía es: " + casosMinimaCuantia.length);
console.log("La cantidad de casos de Menor cuantía es: " + casosMenorCuantia.length);
console.log("La cantidad de casos de Mayor cuantía es: " + casosMayorCuantia.length);

// alert("La cantidad de casos de Mínima cuantía es: " + casosMinimaCuantia.length + "\n" + "La cantidad de casos de Menor cuantía es: " + casosMenorCuantia.length + "\n" + "La cantidad de casos de Mayor cuantía es: " + casosMayorCuantia.length);



