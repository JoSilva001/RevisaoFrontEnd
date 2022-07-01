var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para enviar o progresso para a nuvem?");
    if ((nome == "git push -u origin master" || nome == "git push")) {
        alert("O " + nome + ", serve para prepara salvar arquivos. Parabéns você acertou!"); window.location="fase1.html"
    }else if ((nome == null || nome== "")) {return;}
     else if (( nome != "git status")){ alert("Esse não é o comando"); window.location="fase1.html"; }
} 