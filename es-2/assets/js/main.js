// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare,
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array
// i cui elementi contengono solo nomi e falli subiti e
// stampiamo tutto in console.

const squadre = [
  {
    nome : 'Lazio',
    puntifatti : 0,
    fallisubiti : 0,
  },
  {
    nome : 'Roma',
    puntifatti : 0,
    fallisubiti : 0,
  },
  {
    nome : 'Inter',
    puntifatti : 0,
    fallisubiti : 0,
  },
  {
    nome : 'Juventus',
    puntifatti : 0,
    fallisubiti : 0,
  },
  {
    nome : 'Napoli',
    puntifatti : 0,
    fallisubiti : 0,
  },
];

console.log(squadre);

let datiSquadre = [];

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntifatti = NumberRandom(0, 100)
  squadre[i].fallisubiti = NumberRandom(0, 40)

  //destrutturizzo prendo e pusho nel nuovo array il
  // nome e i falli subiti
  const {nome, fallisubiti} = squadre[i];
  datiSquadre.push({nome, fallisubiti});
}

//Controllo array nuovo
console.log(datiSquadre);


//FUNCTION
//Genero numeri casuali
function NumberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
