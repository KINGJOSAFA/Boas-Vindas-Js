console.log("JS conectado")

let campo = document.getElementById("nome");
let botao = document.getElementById("click");

campo.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {

    let nome = campo.value;

    document.getElementById("mensagem").innerText =
    "Seja bem-vindo, " + nome + "!";

  }

});

botao.addEventListener("click", function() {

    let nome = campo.value;

    document.getElementById("mensagem").innerText = 
    "Seja bem-vindo, " + nome + "!";

  });