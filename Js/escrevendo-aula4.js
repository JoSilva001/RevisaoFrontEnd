var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para commitar (salvar) um ou mais arquivos?");
    if ((nome == "git commit -m" || nome == "git commit -m 'nome do arquivo'" || nome == "git commit")) {
        alert("O " + nome + ", serve para prepara salvar arquivos. Parabéns você acertou!");window.location="aula5.html"
    }else if ((nome == null || nome== "")) {return;}
     else if (( nome != "git status")){ alert("Esse não é o comando"); window.location="aula5.html"; }
} 