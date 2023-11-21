//Pari e Dispari:
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
//Dichiariamo chi ha vinto.

let userChooseEvenOrOdd = parseInt(prompt('even or odd'));
while (userChooseEvenOrOdd != 1 || userChooseEvenOrOdd !=2){
    
}

let userChooseRandomNumber =parseInt(prompt('choose a number from 1 to 5'));

function randomNumberBot (){
    let numberBot = Math.round(Math.random()*5)+1;
    return numberBot
}

let randomNumber= randomNumberBot()

let sumNumbers= userChooseRandomNumber + randomNumber;

function evenOrOdd (n){
    if(n % 2 == 0){
        console.log(n + ' pari')
        return true
    } else {
        console.log(n + ' dispari')
        return false
    }
}

console.log(evenOrOdd(sumNumbers))


 winnerIs 
 if( userChooseEvenOrOdd)
