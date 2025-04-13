const claveApi= '8a28a04529ab470a955141835251304';
const idioma = 'es';
const inpCiudad = 'document.getElementById'('input-ciudad');

async function obtenerClimaActual() {

    const cuidad = inpCiudad.value;

    if (!ciudad){
        alert('Por favor ingrese una ciudad');
        return;
    }

    const apiClimaActual = '`https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;'
    
    const responder = await fetch(apiClimaActual);
    const data = await responder.json();

    mostrarClima(data);
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('temp').innerHTML = data.current.temp_c + '°C';
    document.querySelector('ciudad').innerHTML = data.location.name;
    document.querySelector('humedad').innerHTML= data.current.humidity + '%';
    document.querySelector('#ciudad').innerHTML = data.current.wind_kph + 'km/h';
}