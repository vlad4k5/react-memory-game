import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import s from "./Board.module.scss"
import { useSelector } from "react-redux";
import { formatTime } from "../../assets/formatTime";

const Board = () => {

  const { cards, isGameStarted } = useSelector((state) =>  state.gameReducer);
  let [times, setTimes] = useState([]);

  useEffect(() => {
    let timers = JSON.parse(localStorage.getItem("times")) || [];
    timers.sort((a, b) => a - b);
    setTimes(timers.slice(0, 10));
  }, [isGameStarted]);

  const resetResults = () => {
    localStorage.clear()
    setTimes([])
  }

  return <div className={s.board}>
    <Header />

    <div className={`${s.cards} ${!isGameStarted && s.hide}`}>
      {cards.map((card) => (<Card key={card.id} {...card} />))}
    </div>

    <div className={`${s.results} ${isGameStarted && s.hide}`}>
      <div className={s.resultsTimes}>Best results:</div>
      {times.length === 0 && <span className={s.noResultsCase}>{"You don't have any results yet :("}</span>}
      {times.map((time, index) => <div key={index} className={s.time}>{index+ 1 + ") "}{formatTime(time)}</div>)}
      {times.length !== 0 && <button onClick={resetResults} className={s.resetResultsButton}>Reset results</button>}
    </div>
  </div>
}
export default Board