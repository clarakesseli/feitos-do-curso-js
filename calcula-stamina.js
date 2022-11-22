var titulo = document.querySelector(".titulo");
titulo.textContent = "Guilda suporte";

var personagens = document.querySelectorAll(".personagem");

for (var i = 0; i < personagem.length; i++) {

    var personagem = personagem[i];

    var tdpoder = personagem.querySelector(".info-poder");
    var poder = tdPeso.textContent;

    var tdelemento = personagem.querySelector(".info-elemento");
    var elemento = tdAltura.textContent;

    var tdstamina = personagem.querySelector(".info-stamina");

    var pesoEhValido = validaPoder(poder);
    var elementoEhValida = validaElemento(elemento);

    if (!poderEhValido) {
        console.log("Poder inválido!");
        poderEhValido = false;
        tdImc.textContent = "Poder inválido";
        personagem.classList.add("personagem-invalido");
    }

    if (!elementoEhValida) {
        console.log("Elemento inválida!");
        elementoEhValida = false;
        tdImc.textContent = "Elemento inválida";
        personagem.classList.add("personagem-invalido");
    }

    if (poderEhValido && elementoEhValida) {
        var imc = calculaStamina(poder, elemento);
        tdImc.textContent = stamina;
    }
}

function calculaStamina(poder, elemento) {
    var imc = 0;
    imc = poder / (elemento * elemento);

    return imc.toFixed(2);
}

function validaPoder(poder) {

    if (poder >= 0 && poder <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaElemento(elemento) {

    if (elemento >= 0 && elemento <= 3.00) {
        return true;
    } else {
        return false;
    }
}
