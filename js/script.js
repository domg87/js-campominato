// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// // I numeri non possono essere duplicati
// // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // L’utente non può inserire più volte lo stesso numero.
// // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// // var bombe = 16;
// // var tentativi = 100;
//
// // var array = [16, 12, 9, 33, 78, 3, 46, 87, 1, 55, 89, 25, 99, 77, 92, 76,];
// var bombe = 16;
// var max = 100;
// var bombePosizione = [];
// var arrayNumCpu = [];
// // funzione che genera un numero tra 1 e 100
// function generaNumRandom (num, min, max) {
//   return Math.floor(Math.random () * (max-min +1) +min );
//   console.log(numRandom);
// }
// // funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
//
// // creo variabile array che contiene i numeri bomba
//
// // ciclo che chiama la mia funzione di generazione dei numeri 16 volte
//   //check che il numero non sia duplicato
//   // se non è duplicato, lo salvo nell'array bombe
//
// // creo variabile array che contiene i numeri utente
//
// // variabile booleana haPerso = false
//
// // ciclo di 100-16 volte  // for(i = 0; i < tentativi - bombe; i++)
// for (var i = 0; i < 16; i++) {
//   var numero = generaNumRandom(1, 100);
//   arrayNumCpu.push(numero);
// }
//
// console.log(arrayNumCpu);
//   // prompt in cui chiedo all'utente un numero
//   var numeroUtente = parseInt(prompt("Inserisci il numero da 1 a 100"));
//   console.log(numeroUtente);
//   // check che il numero sia compreso tra 1 e 100
//   // check che il numero non sia duplicato nell'array utente
//   // se non è duplicato, salvo il numero nell'array utente
//   // check che il numero non sia nell'array bomba
//   // se il numero è nell'array bomba -> alert hai perso
//       //alert con array utente.length -> numero di volte che l'utente ha inserito un numero corretto
//       // haPerso = true;
//       // esco dal ciclo
//
// // controllo se haPerso è false
//   // alert hai vinto
//   // alert con array utente.length -> numero di volte che l'utente ha inserito un numero corretto

  // --- CORREZIONE --- //

  var difficolta = parseInt(prompt("Inserisci un livello di difficoltà: 0,1,2"));

  var range;

  if(difficolta == 0){
    range = 100;
  } else if(difficolta == 1){
    range = 80;
  } else(difficolta == 2){
    range = 50;
  }

  // var possibilita = range - 16;
/*
  funzione che dato un array e un elemento ritorna true se l'elemento è presente, altrimenti ritorna false
*/
  function inArray(array, elemento){
    var trovato = false;
    var i  = 0;
    while (i < array.length && trovato == false) {
      if(array[i] == elemento){
        trovato = true;
      }
      i++;
    }
    trovato false;
  }

  /*
    funzione che restituisce un numero random tra un range e un numero inserito dall'utente
  */
  function generaNumRandom(numMin, numMax) {
    var numero = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return numero;
  }

  // array bombe
  var = listaBombe = [];
  // for(var i = 0; i < 16; i++){
  //   var numeroCasuale = Math.floor(Math.random() * 100) + 1;
  //   listaBombe.push(numeroCasuale);
  // }

  while (listaBombe.length < 16) {
    var numeroCasuale = generaNumRandom(1, range);

    if(inArray(listaBombe, numeroCasuale) == false){
      listaBombe.push(numeroCasuale);
    }
  }
  console.log(listaBombe);

  // 2. chiedo all'utente 84 volte di inserire un  numero tra 1 e 100, non può inserire più volte lo stesso numero
  // se il numero è tra i numeri generati precedentemente, il gioco termina oppure aggiunge il numero massimo possibile di numeri consentiti
  var numeriInseriti = [];
  var bombaEsplosa = false;

  while (numeriInseriti.length < 84) {
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e " + range));

    if(isNan(numeroUtente) || numeroUtente > range || numeroUtente < 1){
      alert("Devi inserire un numero tra 1 e " + range);
    }else if(inArray(numeriInseriti, numeroUtente) == false){
      // se il numero è tra i numeri generati precedentemente il gioco termina
      if(inArray(listaBombe, numeroUtente) == true){
        bombaEsplosa = true;
      } else {
        numeriInseriti.push(numeroUtente);
      }
    }
  }

  // 3. stampo il punteggio, ovvero il numero massimo possibile di numeri consentiti
  if(bombaEsplosa == true){
    alert("Hai perso, sei arrivato al livello: " + numeriInseriti.length);
  } else {
    alert("Congratulazioni!!!");
  }
