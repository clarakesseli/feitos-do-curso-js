var botaoAdicionar = document.querySelector("#adicionar-personagem");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var personagem = obtemPersonagemDoFormulario(form);

    var erros = validaPersonagem(personagem);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPersonagemNaTabela(personagem);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPersonagemDoFormulario(form) {

    var personagem = {
        nick: form.nick.value,
        poder: form.poder.value,
        elemento: form.elemento.value,
        arma: form.arma.value,
        stamina: calculaStamina(form.poder.value, form.elemento.value)
    }

    return personagem;
}

function montaTr(personagem) {
    var personagemTr = document.createElement("tr");
    personagemTr.classList.add("personagem");

    personagemTr.appendChild(montaTd(personagem.nick, "info-nick"));
   personagemTr.appendChild(montaTd(personagem.poder, "info-poder"));
  personagemTr.appendChild(montaTd(personagem.elemento, "info-elemento"));
  personagemTr.appendChild(montaTd(personagem.arma, "info-arma"));
 personagemTr.appendChild(montaTd(personagem.stamina, "info-stamina"));

    return personagemTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validapersonagem(personagem){

    var erros = [];

    if (atleta.nome.length == 0) {
        erros.push("O nick não pode ser em branco");
    }

    if (atleta.gordura.length == 0) {
        erros.push("A arma não pode ser em branco");
    }

    if (atleta.peso.length == 0) {
        erros.push("O poder não pode ser em branco");
    }

    if (atleta.altura.length == 0) {
        erros.push("O elemento não pode ser em branco");
    }

    if (!validaPeso(personagem.poder)) {
        erros.push("Poder é inválido");
    }

    if (!validaAltura(personagem.elemento)) {
        erros.push("Elemento é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPersonagemNaTabela(personagem) {
    var personagemTr = montaTr(personagem);
    var tabela = document.querySelector("#tabela-personagens");
    tabela.appendChild(personagemTr);
}
