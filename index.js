function login() {
    // Obtenemos el valor del campo usuario
    var usuario = document.getElementById("inlineFormCustomSelectPref").value;
    // Obtenemos el valor del campo contraseña
    var contrasena = document.getElementById("contraseña").value;
  
    // Verificamos que ambos campos no estén vacíos
    if (usuario == "" || contrasena == "") {
      alert("Por favor, ingresa tu usuario y contraseña.");
      return false;
    }
  
    // Verificamos que el usuario y contraseña sean correctos
    switch (usuario) {
      case "Alma":
        if (contrasena == "1234") {
          alert("Bienvenida Alma Delia Mora Gutierrez.");
          window.location = "ALMA/Alma.html";
          return true;
        } else {
          alert("Contraseña incorrecta.");
          return false;
        }
        break;
      case "Oscar":
        if (contrasena == "5678") {
          alert("Bienvenido Oscar Martínez González.");
          window.location = "OSCAR/Oscar.html";

          return true;
        } else {
          alert("Contraseña incorrecta.");
          return false;
        }
        break;
      case "Viridiana":
        if (contrasena == "9012") {
          alert("Bienvenida Viridiana Molina Guzmán.");
          window.location = "VIRIDIANA/Viridiana.html";
          return true;
        } else {
          alert("Contraseña incorrecta.");
          return false;
        }
        break;
      default:
        alert("Usuario incorrecto.");
        return false;
    }
  }