function mostrarInformacoes() {
    var botao = document.getElementById("btnMostrar");
    var divInformacoes = document.getElementById("informacoes_dengue");

    // Alterna a classe 'hidden' para mostrar ou esconder as informações
    if (divInformacoes.classList.contains("hidden")) {
        divInformacoes.classList.remove("hidden");
        botao.innerText = "Esconder Informações sobre Dengue";
    } else {
        divInformacoes.classList.add("hidden");
        botao.innerText = "Mostrar Informações sobre Dengue";
    }
}


