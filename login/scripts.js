function logar() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name == "1" && email == "1" && password == "1") {
        alert('Sucesso!')
        location.href = "../home/index.html";
    } else {
        alert('Usuario ou senha incorretos.');
    }
}