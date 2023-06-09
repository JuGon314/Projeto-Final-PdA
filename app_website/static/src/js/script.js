const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);
        
        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);  
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}


function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function alternarModal (){
    modal.classList.toggle ("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute ("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute ("src", "");
} )

function botaoComprar() {
    alert("Redirecionando para o site de compra...")
}