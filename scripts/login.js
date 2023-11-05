
//        *** SECCIÓN 1: RECUPERACIÓN DE DATOS GUARDADOS EN EL SESSIONSTORAGE  ***

    // Declaración de arrays vacíos que intervienen en la recuperación 

// let arraysesionanterior = [];
// let arraycompleto = [];

    // Se trae la información del SessionStorage invocando la key donde se guardará siempre 

// let arrayTraidoDelStorage = JSON.parse(sessionStorage.getItem("arrayEnSessionStorage"));
    
    // Condicional donde se averigua si existe o no la key del session storage.
    // Si existe, pinta en la tabla la información existente. 

    

//         *** SECCIÓN 1: LOGIN ***

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    // Se vincula la información digitada en el formulario para ser traida al programa


    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    // let arrayusuariologin = [];

        // Función que crea el objeto que se guardará en los arrays y el Local Storage. 

    let usuario = {
        elusuario: nombreUsuario,
        lacontrasegna: contrasegna
        };

    // Se adjunta el nuevo objeto al array de casos nuevos.   
    // arrayusuariologin.push(usuario);
        console.log(usuario);

    
    // Se trae el array de usuarios y contraseñas guardadas en el Local Storage y se transforman con parse

    let arrayTraidoDelStorage = JSON.parse(localStorage.getItem("arrayEnLocalStorage"));
    console.log(arrayTraidoDelStorage);
    
    // Se limpia el formulario

    formulario.reset();

    // Se desarrolla la condicional que compara los input del usuario con los datos traídos del 
    // Local Storage para permitir el login y dirigir al home


    if (arrayTraidoDelStorage.includes("usuario")) {
        window.location.href = "../index.html";
      } else {
      let resultadoLogin = document.getElementById("resultado"); 
      resultadoLogin.innerHTML = "<p>Usuario o contraseña incorrectos</p>";
      }

 })

