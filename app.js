// Arreglo de palabras
const palabras = ["cama", "carro", "casa", "helicoptero"];

// Variable que contiene una palabra
let palabra = Math.floor(Math.random() * palabras.length);

switch (palabras[palabra]) {
    case "cama":
        console.log("Es una cama");
        break;
    case "carro":
        console.log("Es un carro");
        break;
    case "casa":
        console.log("Es una casa");
        break;

    case "helicoptero":
        console.log("Es un helicoptero");
        break;

    default:
        break;
}