/* 
  **Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
**Bonus 1:**
Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
****
**Bonus 2:**
E se volessi un bottone per invertire la “direzione” del carosello?
****
*/ 
const postiDaVisitare = [
    {
      nome: "Montebelluna",
      descrizione: "Il toponimo è chiaramente un composto. Monte- indicherebbe la collina di Mercato Vecchio, ai piedi della quale è sorto l'abitato. Più discussa l'origine di -belluna: potrebbe essere in relazione al culto della dea Bellona; o, posticipandone l'origine, si richiamerebbe alla città di Belluno che, nel X secolo, aveva espanso la propria giurisdizione fin oltre il Piave grazie alle conquiste del vescovo Giovanni",
      urlImg: 'montebelluna.jpg'
    },
    {
      nome: "Restera Treviso",
      descrizione: "La Restera è la strada che corre lungo gli argini del Sile,In passato era il camminamento per uomini ed animali addetti al traino dei burci.I burci erano pesanti imbarcazioni destinate al trasporto di granaglie, inerti e laterizi che in questo tratto del fiume dovevano venire trascinate fino al vicino porto di Fiera.",
      urlImg: 'restera.JPG'
    },
    {
      nome: "Sacile",
      descrizione: "In epoca romana il territorio di Sacile rientrava nella giurisdizione del municipio di Oderzo, ma non è provata l'esistenza di un vero centro abitato. Dopo la distruzione di Oderzo da parte dei Longobardi di re Grimoaldo, la zona assunse importanza strategica in quanto localizzata nel punto in cui la strada che collegava Pavia (capitale del regno longobardo) a Cividale superava il Livenza tramite un ponte; in aggiunta, il fiume era divenuto un confine naturale tra i neoistituiti ducati di Ceneda e del Friuli. ",
      urlImg: 'sacile.jpg'
    },
    {
      nome: "Treviso",
      descrizione: "La prima menzione di Treviso, seppur indiretta, compare nel III libro della Naturalis historia di Plinio il Vecchio in cui è citato il «Fluvius Silis ex montibus Tarvisanis». Bisognerà aspettare il De vita sancti Martini di Venanzio Fortunato per avere una prima citazione del toponimo «Tarvisus», seguito, poco dopo, dall'Anonimo Ravennate con «Trabision». Numerosi sono poi i riferimenti nell'Historia Langobardorum di Paolo Diacono: «Tribicium seu Tarbision», «apud Tarvisium» ecc. L'ipotesi più probabile è che Tarvisium, scomponibile in Tarv-is-ium, sia di origine celtica: si riconoscono infatti tarvos e la formante -is- tipica dei toponimi gallici.",
      urlImg: 'treviso.jpg'
    },
    {
      nome: "Venezia",
      descrizione: "La città è stata per 1100 anni la capitale della Serenissima Repubblica di Venezia ed è conosciuta a questo riguardo come la Serenissima, la Dominante e la Regina dell'Adriatico: per le peculiarità urbanistiche e per il suo patrimonio artistico, è universalmente considerata una tra le più belle città del mondo, dichiarata, assieme alla sua laguna, patrimonio dell'umanità dall'UNESCO, che ha contribuito a farne la seconda città italiana dopo Roma con il più alto flusso turistico.",
      urlImg: 'venice.jpeg'
    }
];
// 1 richiamo tag
const containerImgLg = document.querySelector('.container-slider-top');
const containerImgXs = document.querySelector('.container-slider-bottom');
const buttonRight = document.querySelector('.btn.right');
const buttonLeft = document.querySelector('.btn.left');

// creo l'html dinamicamente
postiDaVisitare.forEach(luogo => {
  createContentTop(luogo);
  createContentBottom(luogo);
});

// creo la situazione di default

document.querySelector('.img-slider-top').classList.remove('d-none');
document.querySelector('.img-slider-bottom img').classList.add('active');
let counter = 0;





// creo i due arrey contenenti la mia collezione di immagini
const arrayImgTop = document.getElementsByClassName('img-slider-top');
const arrayImgBottom = document.getElementsByClassName('img-slider-bottom');
let isLeft;


buttonLeft.addEventListener('click', function(){
  isLeft = true;
  sliderNextPrev(isLeft,arrayImgTop,arrayImgBottom );
})
buttonRight.addEventListener('click', function(){
  isLeft = false;
  sliderNextPrev(isLeft,arrayImgTop,arrayImgBottom );
})

// do un intervallo per il cambio immagini e una variabile globale
let changeTime = 1.7 ;
let startInterval;

// loop che cambia le immagini
startInterval = setInterval(function(){
}, changeTime * 1000)










//FUNZIONI
function createContentTop(oggetto){
 let contentTop = '';
 
  contentTop = `
  <div class="img-slider-top d-none">
    <img src="img/${oggetto.urlImg}" alt="${oggetto.nome}"> 
  
    <div class="description">
      <h2> ${oggetto.nome}  </h2>
      <p>  ${oggetto.descrizione} </p>
    </div>
  </div>  
`;

containerImgLg.innerHTML += contentTop;
};

function createContentBottom(oggetto){
let contentBottom = '';


contentBottom = `
  <div class="img-slider-bottom">
    <img class="" src="img/${oggetto.urlImg}" alt="${oggetto.nome}">
  </div>
`;

containerImgXs.innerHTML += contentBottom;
};

function sliderNextPrev(flag,array1, array2){
  array1[counter].classList.add('d-none');
  array2[counter].classList.remove('active');

  if(!(flag)) {
    ++counter
    if(counter == postiDaVisitare.length) counter = 0;
  } else {
    if(counter == 0) counter = postiDaVisitare.length;
    --counter
  }
  
  array1[counter].classList.remove('d-none');
  array2[counter].classList.add('active')
}