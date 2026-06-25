let permissao = 0;

function obterLocalizacao() {
    const resultado = document.getElementById("body");
    if (!navigator.geolocation) {
        resultado.textContent = "Geolocalização não suportada pelo navegador.";
        resultado.style = ' color:red;display: flex; justify-content:center;align-items:center; height:100vh';
        return;
    }
    navigator.geolocation.getCurrentPosition(
        function (posicao) {
            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;

            alert(`Latitude: ${latitude}Longitude: ${longitude}`);
        },
        function (erro) {
            resultado.textContent = "Erro ao obter localização: " + erro.message;
            resultado.style = ' color:red;display: flex; justify-content:center;align-items:center; height:100vh';

        }
    );
}

obterLocalizacao();

