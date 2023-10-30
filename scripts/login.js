
//         *** SECCIÓN 1: DEFINICIÓN Y GUARDADO DE USUARIOS Y CONTRASEÑAS EN EL LOCAL STORAGE ***

// Array de usuarios y contraseñas 

const user = "Pedro";
const password = 1234;

// Se guarda el array convertido en string en el Local Storage

localStorage.setItem("usuario1", JSON.stringify(user));
localStorage.setItem("clave1", JSON.stringify(password));

//         *** SECCIÓN 2: FORMULARIO DEL LOGIN  ***

// Se define la función que escucha el SUBMIT del formulario

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    // Se definen las variables para los datos ingresados en el formulario

    let nombreUsuario = document.getElementById("username").value;
    let contrasegna = document.getElementById("password").value;

    // Se trae el array de usuario y contraseñas desde el Local Storage y se transforma con parse

    const usuarioEnLocalStorage = JSON.parse(localStorage.getItem("usuario1"));
    const contrasegnaEnLocalStorage = JSON.parse(localStorage.getItem("clave1"));

    // Se limpia el formulario

    formulario.reset();

    // Se desarrolla la condicional que compara el input del usuario con los datos traídos del 
    // Local Storage para permitir el login y dirige al home

    if (usuarioEnLocalStorage == nombreUsuario && contrasegnaEnLocalStorage == contrasegna) {
        window.location.href = "../index.html";
      } else {
      const resultadoLogin = document.getElementById("resultado"); 
      console.log(resultadoLogin);
      resultadoLogin.innerHTML = "<p>Usuario o contraseña incorrectos</p>";
      resultado.append(resultadoLogin);
      }

 })

