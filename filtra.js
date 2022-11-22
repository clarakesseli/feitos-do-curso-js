var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var personagens = document.querySelectorAll(".personagem");

    if (this.value.length > 0) {
        for (var i = 0; i < personagem.length; i++) {
            var personagem = personagens[i];
            var tdNick = personagens.querySelector(".info-nick");
            var nick = tdNick.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nick)) {
                personagem.classList.add("invisivel");
            } else {
                personagem.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < personagens.length; i++) {
            var personagem = personagens[i];
           personagem.classList.remove("invisivel");
        }
    }
});
