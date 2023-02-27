"use strict";

// Grab a couple of things
var section = document.querySelector('section');
var playerLivesCount = document.querySelector('span');
var playerLives = 3; // Link text

playerLivesCount.textContent = playerLives; // Generate the data

var getData = function getData() {
  return [{
    imgSrc: './images/beatles.jpeg',
    id: 1,
    name: 'beatles'
  }, {
    imgSrc: './images/blink182.jpeg',
    id: 2,
    name: 'blink 182'
  }, {
    imgSrc: './images/fkatwigs.jpeg',
    id: 3,
    name: 'fka twigs'
  }, {
    imgSrc: './images/fleetwood.jpeg',
    id: 4,
    name: 'fleetwood'
  }, {
    imgSrc: './images/joy-division.jpeg',
    id: 5,
    name: 'joy division'
  }, {
    imgSrc: './images/ledzep.jpeg',
    id: 6,
    name: 'lep zeppelin'
  }, {
    imgSrc: './images/metallica.jpeg',
    id: 7,
    name: 'metallica'
  }, {
    imgSrc: './images/pinkfloyd.jpeg',
    id: 8,
    name: 'pink floyd'
  }, {
    imgSrc: './images/beatles.jpeg',
    id: 9,
    name: 'beatles'
  }, {
    imgSrc: './images/blink182.jpeg',
    id: 10,
    name: 'blink 182'
  }, {
    imgSrc: './images/fkatwigs.jpeg',
    id: 11,
    name: 'fka twigs'
  }, {
    imgSrc: './images/fleetwood.jpeg',
    id: 12,
    name: 'fleetwood'
  }, {
    imgSrc: './images/joy-division.jpeg',
    id: 13,
    name: 'joy division'
  }, {
    imgSrc: './images/ledzep.jpeg',
    id: 14,
    name: 'led zeppelin'
  }, {
    imgSrc: './images/metallica.jpeg',
    id: 15,
    name: 'metallica'
  }, {
    imgSrc: './images/pinkfloyd.jpeg',
    id: 16,
    name: 'pink floyd'
  }];
}; // Randomize


var randomise = function randomise() {
  var cardData = getData();
  cardData.sort(function () {
    return Math.random() - 0.5;
  }); // console.log(cardData);

  return cardData;
};

randomise(); // Card Generato Function

var cardGenerator = function cardGenerator() {
  var cardData = randomise(); // Generate HTML Card

  cardData.forEach(function (item) {
    var card = document.createElement('div');
    var face = document.createElement('img');
    var back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back'; // Attach the info of the cards

    face.src = item.imgSrc;
    card.setAttribute('name', item.name); // Attach the cards to the section

    card.appendChild(face);
    card.appendChild(back);
    section.appendChild(card); //Adde event Listener

    card.addEventListener('click', function (e) {
      card.classList.toggle('toggleCard'); // console.log(card);

      checkCards(e);
    });
  });
  console.log(cardData);
}; // Check cards


var checkCards = function checkCards(e) {
  // console.log(e);
  var clickedCard = e.target;
  clickedCard.classList.add('flipped');
  var flippedCards = document.querySelectorAll('.flipped'); // Logic

  if (flippedCards.length === 2) {
    if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
      console.log('match');
    } else {
      console.log('wrong');
    }
  }
};

cardGenerator();