function exibirPiada(){
    axios.get('https://v2.jokeapi.dev/joke/Any').then(resposta => {
        const piada = resposta.data;
        exibirPiadaAleatoria(piada);
    })
}

function exibirCachorro(){
    axios.get('https://dog.ceo/api/breeds/image/random').then(resposta => {
        const cachorro = resposta.data.message;
        exibirImagemCachorro(cachorro);
    })
}

const botao = document.getElementById('btChama');

botao.addEventListener('click', () => {
    exibirPiada();
    exibirCachorro();
})

function exibirPiadaAleatoria(piada){
    const pergunta = document.getElementById('tituloPiada');
    const resposta = document.getElementById('respostaPiada');

    pergunta.innerHTML = piada.setup;
    resposta.innerHTML = piada.delivery;
}

function exibirImagemCachorro(cachorro){
    const imagem = document.getElementById('cachorrinho').src = cachorro;
}
