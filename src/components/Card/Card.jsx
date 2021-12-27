import s from './Card.module.scss'
import React, { memo } from 'react'

const Card = ({
  id,
  isOpen,
  value,
  isOnBoard,
  isInterfaceBlocked,
  isGameStarted,
  setCardOpenCallback,
}) => {
  const openCard = (id, value) => {
    setCardOpenCallback(id, value)
  }

  return (
    <button
      disabled={isInterfaceBlocked || !isOnBoard || !isGameStarted || isOpen}
      className={`${s.card} ${isOpen && s.active} ${!isOnBoard && s.hide} ${
        !isGameStarted && s.disabled
      }`}
      onClick={() => openCard(id, value)}
    >
      <div className={s.front}></div>
      <div className={s.back}>{value}</div>
    </button>
  )
}
export default memo(Card)
