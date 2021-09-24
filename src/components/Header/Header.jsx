import s from "./Header.module.scss"
import { formatTime } from '../../assets/formatTime'
import { memo } from "react"

const Header = ({ cardsGuessed, isGameStarted, timer, startGameCallback }) => {

  return <div className={s.header}>
    <div className={s.timer}>{formatTime(timer)}</div>
    <div className={s.counter}>
      {cardsGuessed}
      <span>/16</span>
    </div>
    <button disabled={isGameStarted} className={`${s.button} ${isGameStarted && s.hide}`}onClick={startGameCallback}>Start</button>
  </div>
}
export default memo(Header)