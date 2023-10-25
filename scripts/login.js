
// Declaración de variables para el Login 

const $submit = document.getElementById("submit" ),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

// Función que permite visualizar el texto de la contraseña 

document.addEventListener("visualizar", (x) => {
    if(x.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
})

// Función que 1) previene el funcionamiento del login sin que los campos se completen 
//             2) linkea la p{agina del login con la de home (index.html) al completar los campos}

document.addEventListener("click", (x) => {
    if(x.target === $submit){
        if($password.value !== "" && $username.value !== ""){
            x.preventDefault();
            window.location.href = "../index.html";
        }
    }   
})