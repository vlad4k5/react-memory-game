import React, { memo, useCallback, useEffect, useState } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import s from './Board.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime } from '../../assets/formatTime'
import { setCardOpen, startGame } from '../../store/gameReducer'

const Board = () => {
  const { cards, isGameStarted, cardsGuessed, timer, isInterfaceBlocked } = useSelector(
    ({ gameReducer }) => gameReducer
  )
  const [times, setTimes] = useState([])

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem('scores')) || []
    scores.sort((a, b) => a - b)
    setTimes(scores.slice(0, 10))
  }, [isGameStarted])

  const resetResults = () => {
    localStorage.clear()
    setTimes([])
  }

  const dispatch = useDispatch()

  const startGameCallback = useCallback(() => {
    dispatch(startGame())
  }, [dispatch])

  const setCardOpenCallback = useCallback(
    (id, value) => {
      dispatch(setCardOpen(id, value))
    },
    [dispatch]
  )

  return (
    <div className={s.board}>
      <Header
        cardsGuessed={cardsGuessed}
        isGameStarted={isGameStarted}
        timer={timer}
        startGameCallback={startGameCallback}
      />

      <div className={`${s.cards} ${!isGameStarted && s.hide}`}>
        {cards.map(card => (
          <Card
            key={card.id}
            {...card}
            isInterfaceBlocked={isInterfaceBlocked}
            isGameStarted={isGameStarted}
            setCardOpenCallback={setCardOpenCallback}
          />
        ))}
      </div>

      <div className={`${s.results} ${isGameStarted && s.hide}`}>
        <div className={s.resultsTimes}>Best results:</div>
        {times.length === 0 && (
          <span className={s.noResultsCase}>{"You don't have any results yet :("}</span>
        )}
        {times.map((time, index) => (
          <div key={index} className={s.time}>
            {index + 1 + ') '}
            {formatTime(time)}
          </div>
        ))}
        {times.length !== 0 && (
          <button onClick={resetResults} className={s.resetResultsButton}>
            Reset results
          </button>
        )}
      </div>
    </div>
  )
}
export default memo(Board)
