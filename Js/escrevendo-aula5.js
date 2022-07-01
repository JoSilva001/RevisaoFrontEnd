var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para conectar o diretório local com o remoto?");
    if ((nome == "git remote add origin")) {
        alert("O " + nome + " 'url do repositório local'" + ", serve para prepara salvar arquivos. Parabéns você acertou!"); window.location="aula6.html"
      }else if ((nome == null || nome== "")) {return;}
      else if (( nome != "git status")){ alert("Esse não é o comando"); window.location="aula6.html"; }
      else if ((nome == "git remote add 'url do repositório")); alert("O " + nome + ", serve para conectar o repositório local com o remoto. Parabéns, você acertou!")} 
