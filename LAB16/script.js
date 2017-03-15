
var app = angular.module('talkALot', []);

app.controller('makeWordsController', function($scope) {

//Make 4 arrays that correlates with each button
//Make one empty array to push items into
//Use magic word ($scope) before name of each array

    $scope.emptyWordArray = [];
    var words = ['Touch of Gray', 'Truckin', 'Friend of the Devil', 'Ripple', 'Fire On The Mountain'];
    var decWords=['one', 'two', 'three', 'four', 'five'];
    var moreWords = ['Eyes Of The World', 'Estimated Profit', 'Althea', 'They Love Eachother'];
    var moreDecs= ['six', 'seven', 'eight', 'nine'];

//create item, insert random word
//grab words from array at random using math.floor(math.random()) and insert into empty item
//click button (e.g. addWord) and create item that grabs the word from the array && decoration property
//push item into emptyWordArray and display on browser

$scope.addWord=function() {
  var item={};
  item.word=words[Math.floor(Math.random() * words.length)];
  $scope.emptyWordArray.push(item);
  };

$scope.addMoreWords=function() {
  var item={};
  item.word=moreWords[Math.floor(Math.random()* moreWords.length)];
  $scope.emptyWordArray.push(item);
};

$scope.addDecorativeWord=function() {
  var item={};
  item.word=words[Math.floor(Math.random() * words.length)];
  item.decoration=decWords[Math.floor(Math.random() * decWords.length)];
  $scope.emptyWordArray.push(item);
};

$scope.addMoreDecoration=function() {
  var item={};
  item.word=moreWords[Math.floor(Math.random() * moreWords.length)];
  item.decoration=moreDecs[Math.floor(Math.random() * moreDecs.length)];
  $scope.emptyWordArray.push(item);
};


});
