
//         *** SECCIÓN 1: RECUPERACIÓN DE DATOS GUARDADOS EN EL SESSIONSTORAGE  ***

    // Declaración de arrays vacíos que intervienen en la recuperación 

let arraysesionanterior = [];
let arraycompleto = [];

    // Se trae la información del SessionStorage invocando la key donde se guardará siempre 

let arrayTraidoDelStorage = JSON.parse(sessionStorage.getItem("arrayEnSessionStorage"));
    
    // Condicional donde se averigua si existe o no la key del session storage.
    // Si existe, pinta en la tabla la información existente. 

    if(arrayTraidoDelStorage !== null){
      arraysesionanterior = arrayTraidoDelStorage;
      
      // Ciclo For-of que pinta los datos en la tabla.

      let tablaDeCasos = document.querySelector("#tablaCasos tbody");
      for (let caso of arraysesionanterior){
        let nuevaFila = tablaDeCasos.insertRow();
    
        nuevaCasilla = nuevaFila.insertCell(0);
        nuevaCasilla.textContent = caso.elnombre;

        nuevaCasilla = nuevaFila.insertCell(1);
        nuevaCasilla.textContent = caso.elavaluo;

        nuevaCasilla = nuevaFila.insertCell(2);
        nuevaCasilla.textContent = caso.elporcentaje;

        nuevaCasilla = nuevaFila.insertCell(3);
        nuevaCasilla.textContent = caso.lacuantia;

        nuevaCasilla = nuevaFila.insertCell(4);
        nuevaCasilla.textContent = caso.lacuantiaCaso;

        nuevaCasilla = nuevaFila.insertCell(5);
        nuevaCasilla.textContent = caso.eljuzgado;
      }
    } else {
  }

//         *** SECCIÓN 2: FUNCIÓN QUE IMPORTA LOS DATOS DEL HTML Y QUE CÁLCULA LA COMPETENCIA JUDICIAL  ***

    //Se enlaza el botón submit del  html       

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(e){
  e.preventDefault();
  
    //Se traen los datos ingresados en el formulario

  nombreCaso = document.getElementById("nombreCaso").value;
  avaluo = document.getElementById("avaluo").value;
  porcentaje = document.getElementById("porcentaje").value; 
  
    // Se toman los datos y se calcula del valor monetario de la cuantía de la competencia judicial

      if (avaluo !== NaN && porcentaje !== NaN) {
        cuantia = (avaluo * porcentaje) / 100;
      } else () => 
        console.log("No se puede procesar la solicitud desde el principio");
      

    // Se clasifica el valor monetario de la cuantía para saber la competencia judicial del caso

    if (cuantia !== NaN) {
      if (cuantia <= 46400000) {
        cuantiaCaso = "Mínima Cuantía";
        juzgado = "Juzgado Municipal o de Pequeñas Causas";
        
      } else if (46400000 < cuantia && cuantia <= 174000000) {
        cuantiaCaso = "Menor Cuantía";
        juzgado = "Juzgado Civil Municipal";
        
      } else if (174000000 < cuantia) {
        cuantiaCaso = "Mayor Cuantía";
        juzgado = "Juzgado Civil del Circuito";
        
      } else {
        alert("No se puede procesar la información");
      }
    }

    // Se construye el objeto donde se guardará toda la información invocando una función (Ver archivo Tools.js.) 
    agregarCasoAlSistema(nombreCaso,avaluo,porcentaje,cuantia,cuantiaCaso,juzgado)

    // Se pinta la nueva información en la tabla invocando una función (Ver archivo Tools.js.)
    llenartabladecasos();
    
    // Se limpia el formulario del html
    formulario.reset();
  })


































  //         *** SECCIÓN 4: CLASIFICACIÓN DE LA INFORMACIÓN OBTENIDA CON FINES ESTADÍSTICOS  ***

  // // Formación del objeto que hará parte del array de casos (la idea es contar los casos ingresados).

  // caso = {
  //   nombreCaso,
  //   cuantia,
  //   cuantiaCaso
  //   }
  
  // // Método que agrega el nuevo objeto al array.
  
  // listaCasos.push(caso);
  
  // Se imprime el array modificado en la consola para probar el funcionamiento.
  
 // console.log(listaCasos);
  
  // Filtrado del array final para determinar la cantidad de casos por cuantía
  
  // const casosMinimaCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mínima Cuantía")
  // const casosMenorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Menor Cuantía")
  // const casosMayorCuantia = listaCasos.filter(x => x.cuantiaCaso === "Mayor Cuantía")
  
    //         *** SECCIÓN 5: IMPRESIÓN DE LA CLASIFICACIÓN ANTERIOR CREANDO EN EL DOM UN DIV QUE LLEVA LA CUENTA  ***
  
  
    // let tablaEstadistica = document.getElementById("estadistica");
    // let cantidadCasos = document.createElement("div");
    // cantidadCasos.classList.add("text__headline");
    // cantidadCasos.innerHTML = "<h3>CANTIDAD DE CASOS REGISTRADOS</h3>";
    // cantidadCasos.innerHTML += `<p>La cantidad de casos de Mínima cuantía es: ${casosMinimaCuantia.length} </p>`;
    // cantidadCasos.innerHTML += `<p>La cantidad de casos de Menor cuantía es: ${casosMenorCuantia.length} </p>`;
    // cantidadCasos.innerHTML += `<p>La cantidad de casos de Mayor cuantía es: ${casosMayorCuantia.length} </p>`;
    // tablaEstadistica.append(cantidadCasos);






