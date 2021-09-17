import React from 'react'
import { useSelector } from "react-redux"
import s from "./Header.module.scss"
import { startGame } from "../../store/gameReducer"
import { useDispatch } from "react-redux"
import { formatTime } from '../../assets/formatTime'

const Header = () => {

  const { cardsGuessed, isGameStarted, timer } = useSelector(
    (state) => state.gameReducer)
  const dispatch = useDispatch()

  return <div className={s.header}>
    <div className={s.timer}>{formatTime(timer)}</div>
    <div className={s.counter}>
      {cardsGuessed}
      <span>/16</span>
    </div>
    <button disabled={isGameStarted} className={`${s.button} ${isGameStarted && s.hide}`}onClick={() => dispatch(startGame())}>Start</button>
  </div>
}
export default Header