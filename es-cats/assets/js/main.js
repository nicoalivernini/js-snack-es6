// Milestone 1
// Definisco array di oggetti
const gatti = [
  {
    nome : 'Maine',
    eta : 6,
    colore : 'Nero',
    sesso : 'Maschio',
  },
  {
    nome : 'Persiana',
    eta : 7,
    colore : 'Marrone',
    sesso : 'Femmina',
  },
  {
    nome : 'Certosino',
    eta : 3,
    colore : 'Grigio',
    sesso : 'Maschio',
  },
  {
    nome : 'Norva',
    eta : 2,
    colore : 'Bianco',
    sesso : 'Femmina',
  },
];

//Stampo nella pagina i gattini con colore e nome
gatti.forEach((item) => {
  $('#lista-gatti').append(`<li>Il gatto si chiama ${item.nome} ed è di colore ${item.colore}</li>`);
});


// Milestone 2
// Divido gatti in base al sesso
const gattiMaschi = gatti.filter((element) => element.sesso == "Maschio");
console.log(gattiMaschi);

const gattiFemmine = gatti.filter((element) => element.sesso == "Femmina");
console.log(gattiFemmine);

// Aggiungo fiocco rosa se femmina o blu se maschio
gatti.forEach((item) => {
  if (item.sesso == "Maschio") {
    //aggiungo un fiocco blu
    $('#lista-gatti').append(`<li>${item.nome} <i class="fas fa-ribbon maschio ${item.nome}"></i></li>`);
    $('.maschio').css('color' , 'blue');
  } else if (item.sesso == "Femmina") {
    //aggiungo un giocco rosa
    $('#lista-gatti').append(`<li>${item.nome} <i class="fas fa-ribbon femmina ${item.nome}"></i></li>`);
    $('.femmina').css('color' , 'pink');
  }
});

// Colore del fiocco tenue se gatto giovane sennò più scuro
gatti.forEach((item) => {
  if (item.eta >= 4) {
    $('.' + item.nome).css('opacity' , '1');
  } else if (item.eta <= 3) {
    $('.' + item.nome).css('opacity' , '0.5');
  }
});


// Milestone 3
// Creare due array nuovi, maschi e femmine
const maschiOpacity = [];
  //Inserisco come valore l'opacity nell'oggetto
  gattiMaschi.forEach((item) => {
    let opacity;
    if (item.eta >= 4) {
      opacity = 1;
    } else if (item.eta <= 3) {
      opacity = 0.5;
    }
    var gattiMaschiOpacity = {
      ...item,
      opacity: opacity,
    }
    maschiOpacity.push(gattiMaschiOpacity);
});

const femmineOpacity = [];
// Inserisco come valore l'opacity nell'oggetto
  gattiFemmine.forEach((item) => {
    let opacity;
    if (item.eta >= 4) {
      opacity = 1;
    } else if (item.eta <= 3) {
      opacity = 0.5;
    }
    var gattiFemmineOpacity = {
      ...item,
      opacity: opacity,
    }
    femmineOpacity.push(gattiFemmineOpacity);
});


// Ordino i gatti e stampo in console
const ordineGatti = [...femmineOpacity,...maschiOpacity];

// Destrutturizzo
const newOrdine = ordineGatti.map((element) => {
  const {nome, colore, opacity} = element;
  return {nome, colore, opacity};
});

// Stampo in console
console.log(newOrdine);
