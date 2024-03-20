function validarLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    if (email == "joao@exemplo.com" && senha == "123456") {
        alert("Login bem sucedido!");

        window.location.href = "Index.html";
    } else {
        alert("Acesso negado!");

        window.location.href = "AcessoNegado.html";
    }

    return false;
}