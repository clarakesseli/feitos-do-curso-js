var personagens = document.querySelectorAll(".personagem");

var tabela = document.querySelector("#tabela-personagem");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
