// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore
// utilizzando destructuring e template literal

$(document).ready(function(){

//creo array di oggetti
const bici = [
  {
    nome : 'bmx',
    peso : 10,
  },
  {
    nome : 'bici da corsa',
    peso : 4,
  },
  {
    nome : 'mountain bike',
    peso : 7,
  },
];

//posizione bici con peso minore
let leggera = bici[0];
//Ciclo for per controllare il peso
for (let i = 0; i < bici.length; i++) {
  if (bici[i].peso < leggera.peso) {
    leggera = bici[i]
  }
}

//destrutturizzo
const {nome, peso} = leggera;
console.log(leggera);

// Utilizzo template literal
console.log(`La bici che pesa meno è: ${leggera.nome}`);

}) //Chiusura del ready
