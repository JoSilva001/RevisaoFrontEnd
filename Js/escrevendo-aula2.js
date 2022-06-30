var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para ver o conteúdo da pasta?");

    if ((nome == "git status")) {
        alert("O " +  nome + ", serve para ver o conteúdo da pasta. Parabéns você acertou!");  window.location="aula3.html"
    }else if ((nome == null || nome== "")) {return;}
     else if (( nome != "git status")){ alert("Esse não é o comando"); window.location="aula3.html"; }
    
    //window.location="aula3.html"
} 