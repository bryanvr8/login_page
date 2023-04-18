function logar(){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(name == "Pimentel" && email == "pimentel@gmail.com" && password == "22"){
        alert('Sucesso!')
        location.href = "../home/index.html";
    }else{
        alert('Usuario ou senha incorretos.');
    }
    
}