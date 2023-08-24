const axios = require('axios');

function mostrarGatinhoEPiada() {
    axios.get('https://v2.jokeapi.dev/joke/Any').then(response => {
        const joke = response.data;
        if (joke.type === 'single') {
            console.log(joke.joke);
        } else if (joke.type === 'twopart') {
            console.log(joke.setup + '\n' + joke.delivery);
        }

        imagemAleatoriaGatinho();
    }).catch(error => {
        console.error(error);
    });
}

function imagemAleatoriaGatinho() {
    axios.get('https://api.thecatapi.com/v1/images/search').then(response => {
        const catImageURL = response.data[0].url;
        console.log('Imagem de gato:', catImageURL);
    }).catch(error => {
        console.error(error);
    });
}

mostrarGatinhoEPiada();
