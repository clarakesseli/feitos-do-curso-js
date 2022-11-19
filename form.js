var botaoAdicionar = document.querySelector("#adicionar-atleta");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemAtletaDoFormulario(form);

    var erros = validaAtleta(atleta);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(atleta);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemAtletaDoFormulario(form) {

    var atleta = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return atleta;
}

function montaTr(atleta) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(atleta.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(atleta.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(atleta.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(atleta.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(atleta.imc, "info-imc"));

    return atletaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaAtleta(atleta){

    var erros = [];

    if (atleta.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (atleta.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (atleta.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (atleta.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(atleta.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(atleta.altura)) {
        erros.push("Altura é inválida");
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

function adicionaAtletaNaTabela(atleta) {
    var pacienteTr = montaTr(atleta);
    var tabela = document.querySelector("#tabela-atletas");
    tabela.appendChild(atletaTr);
}
