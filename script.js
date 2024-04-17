const cores = ["vermelho", "azul", "verde", "amarelo"];
let coresComputador = [];
let coresUsuario = [];

function iniciarJogo() {
    coresComputador = []; 
    document.getElementById("pontuacao").innerHTML = "Pontuação: " +coresComputador.length;
    document.getElementById("perdeu").innerHTML = "";
    adicionarCorAleatoria();
    exibirSequencia();
}

function exibirSequencia() {
    let i = 0;
    let intervalo = setInterval(function() {
        if (i < coresComputador.length) {
            let cor = coresComputador[i];
            let painel = document.querySelector(`.${cor}`);
            painel.style.opacity = '1';
            setTimeout(() => { painel.style.opacity = '0.5';}, 500);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 1000); 
}

function verificarCor(corClicada) {
    if (corClicada === coresComputador[coresUsuario.length]) {
        coresUsuario.push(corClicada);
        if (coresUsuario.length === coresComputador.length) {
            document.getElementById("pontuacao").innerHTML = "Pontuação: " +coresComputador.length;
            adicionarCorAleatoria();
            coresUsuario = []; 
            exibirSequencia(); 
        }
    } else {
        document.getElementById("perdeu").innerHTML = "Você perdeu!";
        clearInterval(intervalo);
    }
}

function adicionarCorAleatoria() {
    let cor = cores[Math.floor(Math.random() * cores.length)];
    coresComputador.push(cor);
}

document.querySelector('.baixo-direito').addEventListener('click', function() {
    verificarCor("vermelho");
});

document.querySelector('.baixo-esquerdo').addEventListener('click', function() {
    verificarCor("azul");
});

document.querySelector('.cima-direito').addEventListener('click', function() {
    verificarCor("verde");
});

document.querySelector('.cima-esquerdo').addEventListener('click', function() {
    verificarCor("amarelo");
});
