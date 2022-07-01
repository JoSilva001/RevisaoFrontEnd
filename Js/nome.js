
        var button = document.querySelector("button");
    
        button.onclick = function() {
        var nome = prompt("Qual é o seu nome?");
        if ((nome != null || nome != "")){
        alert("Seja bem-vindo " + nome + "!"); window.location="Aula1-comandos.html"}
        }  
        document.getElementById("nomehtml").innerHTML = "jajajajjajja"+nome
