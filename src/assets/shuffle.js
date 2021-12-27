export const shuffle = cards => {
  const res = cards
  for (let i = cards.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * (i + 1))
    const t = cards[randomNum]
    cards[randomNum] = cards[i]
    cards[i] = t
  }
  return res
}
