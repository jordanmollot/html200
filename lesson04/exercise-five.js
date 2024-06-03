let cards = [['spades', 'clubs', 'hearts', 'diamonds'], ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']];

for (let k = 0; k < 1; k++) {
  for (let l = 0; l < cards[k].length; l++) {
      let cardsSuit = (cards[k][l]);
  for (let i = 1; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      let cardsName = (cards[i][j]);
      console.log(cardsName + ' of ' + cardsSuit)
      }
    }
  }
}