// Milestone 1
// Definire un array di oggetti;
// ogni oggetto rappresenta un gatto,
// che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(),
// stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.
// Milestone 2
// Dividere i gatti in due contenitori distinti
// in base al sesso e aggiungere a fianco di ogni
// gattino un fiocco colorato di rosa, se femmina,
// o di blu, se maschio. Il colore del fiocco deve
// essere più tenue se il gatto è più giovane, più
// scuro se il gatto è più vecchio.
// Milestone 3
// Creare un nuovo array con prima tutti i gattini
// femmina e poi tutti i gattini maschio, inserendo
// solamente nome e colore e colore e opacità del
// fiocco per ogni gatto.

//Milestone 1
//Definisco array di oggetti

const gatti = [
  {
    nome : 'Maine',
    eta : '3',
    colore : 'Nero',
    sesso : 'Maschio',
  },
  {
    nome : 'Persiana',
    eta : '6',
    colore : 'Marrone',
    sesso : 'Femmina',
  },
  {
    nome : 'Certosino',
    eta : '4',
    colore : 'Grigio',
    sesso : 'Maschio',
  },
  {
    nome : 'Norva',
    eta : '8',
    colore : 'Bianco',
    sesso : 'Femmina',
  },
];

// Tramite la funzione .forEach(), stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.

gatti.forEach((item) => {
  console.log(`Il gatto si chiama ${item.nome} ed è di colore ${item.colore}`);
});

//Milestone 2
// Dividere i gatti in due contenitori distinti
// in base al sesso e

const gattiMaschi = gatti.filter((element) => element.sesso == "Maschio");
console.log(gattiMaschi);
const gattiFemmine = gatti.filter((element) => element.sesso == "Femmina");
console.log(gattiFemmine);


// aggiungere a fianco di ogni
// gattino un fiocco colorato di rosa, se femmina,
// o di blu, se maschio.

gatti.forEach((item) => {
  if (item.sesso == 'Maschio') {
    //aggiungo un fiocco blu
    $('#lista-gatti').append(`<li>${item.nome} <i class="fas fa-ribbon"></i></li>`);
    $('#lista-gatti i').css('color' , 'blue');
  } else if (item.sesso == 'Femmina') {
    //aggiungo un giocco rosa
    $('#lista-gatti').append(`<li>${item.nome} <i class="fas fa-ribbon"></i></li>`);
  }
});


// Il colore del fiocco deve
// essere più tenue se il gatto è più giovane, più
// scuro se il gatto è più vecchio.
