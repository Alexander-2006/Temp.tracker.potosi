const claveApi= '8a28a04529ab470a955141835251304';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = '`https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;'

const responder = await fetch(apiClimaActual)
let data = await   responder.json()

console.log(data);