//Chiedere all’utente di inserire una parola
let userWord = prompt("type a word");
let reverseWord = palWord(userWord);

if (userWord == reverseWord) {
 console.log("La parola è palindroma");
}

else {
  console.log("La parola non è palindroma");
}

//Creare una funzione per capire se la parola inserita è palindroma
function palWord(userWord) {

 let reverseWord = "";
 
 for (let i = userWord.length -1; i >= 0; i--) {
   reverseWord =reverseWord + userWord[i]
 }
 return reverseWord;
}