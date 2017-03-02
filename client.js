$(document).ready(function(){
  console.log('JQuery Sourced')
  var cardIsSelected = false; //selected white care while in playerView (not yet chosen)
  var cardsInHand = 10; //this will become an empty array which is populated through another means
  var czarWhiteToChoose = []; //selected white cards (max 3)

  //hard coding an array of objects. This will be populated by my database
  var whiteCardInHand = [{text: 'That thing that electrocutes your abs.', id: 1}, {text: 'The folly of man.', id: 2}, {text: 'Fiery poops.', id: 3}, {text: 'Cards Against Humanity.', id: 4}, {text: 'A murder most foul.', id: 5}, {text: 'Me time.', id: 6}, {text: 'The inevitable heat death of the universe.', id: 7}, {text: 'Nocturnal emissions.', id: 8}, {text: 'Daddy issues.', id: 9}, {text: 'The hardworking Mexican.', id: 10}];

updateCardsInHand();

function updateCardsInHand(){
  for (var i = 0; i < whiteCardInHand.length; i++) {
    $('#playerView').append('<div class = "card" data-index= "' + whiteCardInHand[i].id + '">' + whiteCardInHand[i].text + '</div>')
  }//ends for loop
}

function updateCardCzarChooses(){
  for (var i = 0; i < czarWhiteToChoose.length; i++) {
    $('#czarChoiceView').append('<div class = "card czarChoice" data-index= "' + czarWhiteToChoose[i].id + '">' + czarWhiteToChoose[i].text + '</div>');
  }//ends for loop
}

  $('#playerView').append('<button id="playCard">PLAY CARD</button>')

  $('#playerView').on('click', '.card', function(){
    if(cardIsSelected = false){
    $(this).addClass( "selected" );
  } else {
    $('.card').removeClass('selected');
    $(this).addClass( "selected" );
  }
  });//ends on click

$('#playerView').on('click', 'button', function(){
  //find the selected card
  var selectedCardID = $('.selected').data('index');
  console.log(selectedCardID);
  //in player hand, find the whiteCardInHand.id that matches the selectedCardID
  for (var i = 0; i < whiteCardInHand.length; i++) {
    if (whiteCardInHand[i].id == selectedCardID){
      czarWhiteToChoose.push(whiteCardInHand[i])
      whiteCardInHand.splice(i, 1);
      console.log('whitecardinhand: ', whiteCardInHand)
      $('#playerView').empty();
      updateCardsInHand();
      $('#playerView').append('<button id="playCard">PLAY CARD</button>')
      $('#czarChoiceView').empty();
      updateCardCzarChooses();
      console.log('czar array: ', czarWhiteToChoose);
    }
  }
})

});//ends doc.ready
