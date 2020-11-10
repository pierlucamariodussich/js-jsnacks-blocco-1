/* 4A
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/

var league = []

for (var i = 0; i < 3 ;i++){

  var scoreRand = Math.floor((Math.random()*6)+0); //valori presi da 4B
  var foulsRand = Math.floor((Math.random()*6)+0); //valori presi da 4B

  var club={
    'name': prompt('Inserisci il nome della squadra'),
    'score': scoreRand, // es 4A : 'score':  0,
    'fouls': foulsRand, // es 4A : 'fouls':  0,
  }

  console.log(club);
  league.push(club);
}
  console.log(league);

for (var j = 0; j < league.length ;j++){
  $('#result-4').append(league[j].name + " con il punteggio di " + league[j].score + " e con " + league[j].fouls + " falli segnalati <br>")
}

/* 4B
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/

// var scoreRand = Math.floor((Math.random()*6)+0);
// var foulsRand = Math.floor((Math.random()*6)+0);
