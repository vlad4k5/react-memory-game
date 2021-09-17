export const shuffle = (cards) =>  {
    let res = cards;
    for (let i = cards.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * (i + 1));
      let t = cards[randomNum];
      cards[randomNum] = cards[i];
      cards[i] = t;
    }
    return res;
  }