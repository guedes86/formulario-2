function iniciosessao(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
  
    document.getElementById('snombre').textContent = "Nombre: " +nombre;
    document.getElementById('snombre').hidden = false;
    document.getElementById('sapellido').textContent = "Apellido: " +apellido;
    document.getElementById('sapellido').hidden = false;
    document.getElementById('susuario').textContent = "Usuário: " +usuario;
    document.getElementById('susuario').hidden = false;
    document.getElementById('semail').textContent = "E-mail: " +email;
    document.getElementById('semail').hidden = false;

}

function darkmode(){
    document.body.classList.toggle('dark-mode');
}