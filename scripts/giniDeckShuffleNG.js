console.log( 'giniDeckShuffle.js Ta DaDaDaDa!' );
var myApp = angular.module( 'myApp', [] );
myApp.controller( 'DeckShufflerController', [ '$scope', function( $scope ){
  $scope.deck = [];//array holds deck of cards
  $scope.suits = [ 'Clubs', 'Diamonds', 'Hearts', 'Spades' ];//array of suits
  $scope.faces = [ 'Edgar', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Patches', 'Gini', 'Grace' ];//array of faces

  $scope.cutDeck = function(){
    console.log( 'in cutDeck' );
    var cutIndex = Math.random() * $scope.deck.length;
    cutIndex = Math.floor(  cutIndex );
    console.log( 'cutIndex ', cutIndex );
    var topCut = [];
    for( var i=cutIndex; i<$scope.deck.length; i++ ){
      topCut.push( $scope.deck[ i ] );
    }
    var bottomCut = [];
    for( var i=0; i<cutIndex; i++ ){
      bottomCut.push( $scope.deck[ i ] );
    }
    $scope.deck = topCut;
    $scope.deck.push.apply( $scope.deck, bottomCut );
  };//end fun cutDeck

  $scope.setupDeck = function(){
    for( var i=0; i<$scope.suits.length; i++ ){
      for(var j=0; j<$scope.faces.length; j++ ){
        var newCard = {
          suit: $scope.suits[ i ],
          face: $scope.faces[ j ]
        };

        $scope.deck.push( newCard );
      }//end faces loop
    }//end suits loop
    console.log( '$scope.deck', $scope.deck );
  };//end fun setupDeck

  $scope.shuffleDeck = function(){
    console.log( 'in shuffleDeck' );
    $scope.deck = shuffle( $scope.deck );
  };//end fun shuffleDeck

  $scope.setupDeck();
}]);//end controller

// shuffle array function from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
