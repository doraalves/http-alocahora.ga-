function logar() {
    var login = document.getElementById('user').value;
    var senha = document.getElementById('password').value;

    if (login == "" && senha == ""){
        alert('Usuario ou senha vazios')
    } else {
        if (login == "admin" && senha == "admin") {
        location.href = "home.html";
        } else {
            alert('Usuario ou senha incorretos');
        }
    } 
}

