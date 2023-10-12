// # Carosello
// ## Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// ### milestone 1: creare la struttura html di base

// ### milestone 2: ricreare la struttura html attraverso js
// - rimuoviamo tutto il markup statico.
// - inseriamo tutte le immagini dinamicamente servendoci dell’array.
// - creo un ciclo for che concatena un template literal.
// - creo una classe specifica per rendere visibile solo la prima immagine.
// ### mileston 3: evento click
// - Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente:
//     - aggiungo un elemento button nell'html e lo richiamo su js 
//     - aggiungo l'evento click all'elemento preso dal DOM
// --------------------------------------------------------------------------------- //

// - inseriamo tutte le immagini dinamicamente servendoci dell’array

const arrayImages = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]
console.log(arrayImages)

// - CREO UN CICLO FOR CHE CONCATENA UN TAMPLATE LITERAL:
// - richiamo il div carosello dal DOM
const caroselloDOMElement = document.querySelector('.carosello')
console.dir(caroselloDOMElement)
// ciclo for
for (let i = 0; i < arrayImages.length; i++) {
    // console.log(i)

    // assegno alla variabile srcCorrente il valore degli indici array
    const srcCorrente = arrayImages[i]
    console.log(srcCorrente)

    // creo una concatenazione di un template literal
    const htmlString = `
        <img class="image" src="${srcCorrente}">
    `
    console.log(htmlString)
    caroselloDOMElement.innerHTML += htmlString
}

const imageDOMElements = document.getElementsByClassName('image') //imageDOMElement diventa assume le proprietà di un'array
console.log (imageDOMElements)

const firstImageDOMElement = imageDOMElements[0]
firstImageDOMElement.classList.add('active')

// richiamo il bottone down e up dal DOM per creare evento click
const btnDownDOMElement = document.querySelector('.btn-down')
console.dir(btnDownDOMElement)

const btnUpDOMElement = document.querySelector('.btn-up')
console.dir(btnUpDOMElement)

// ciclo for che sposta la classe active da un img all'altra con evento click
// - creo una variabile che rappresenta l'indice dell'array imageDOMElements
let indiceImageDOMElements = 0

// evento click down  
btnDownDOMElement.addEventListener('click',
    function downClick() {

        // prova senza ciclo for

        imageDOMElements[indiceImageDOMElements].classList.remove('active')

        indiceImageDOMElements++

        if (indiceImageDOMElements >= imageDOMElements.length) {
            indiceImageDOMElements = 0
        }

        imageDOMElements[indiceImageDOMElements].classList.add('active')

    })

    // evento click up
btnUpDOMElement.addEventListener('click',
function upClick() {

    // prova senza ciclo for

    imageDOMElements[indiceImageDOMElements].classList.remove('active')

    if (indiceImageDOMElements === 0 ) {
        indiceImageDOMElements = imageDOMElements.length 
    }
    indiceImageDOMElements--

    imageDOMElements[indiceImageDOMElements].classList.add('active')
})



    