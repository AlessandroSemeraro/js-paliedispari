//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoiceDrawOrEven = prompt('draw or even?');

let userChoiceNumber = prompt('type a number from 1 to 5');

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function botRandomNumber (botNumber){
    let botBoh = Math.floor( Math.random() * 4 ) +1;
    alert('You rolled a ' + botNumber);
}

botRandomNumber
