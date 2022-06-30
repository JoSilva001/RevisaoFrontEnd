var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para enviar o progresso para a nuvem?");
    if ((nome == "git push -u origin master" || nome == "git push")) {
        alert("O " + nome + ", serve para prepara salvar arquivos. Parabéns você acertou!");
    } else { alert ("O comando não é esse")}
    window.location="aula7.html"
} 