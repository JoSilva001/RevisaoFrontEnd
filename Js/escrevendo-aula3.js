var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para preparar um conteúdo para commitá-lo?");
    if ((nome == "git add")) {
        alert("O " + nome + ", serve para prepara um conteúdo na pasta. Parabéns você acertou!");
    } else { alert ("O comando não é esse")}
    window.location="aula4.html"
} 