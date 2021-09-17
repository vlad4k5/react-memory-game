import React from "react";
import s from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCardOpen } from "../../store/gameReducer";


const Card = ({ id, isOpen, value, isOnBoard }) => {
  
  const dispatch = useDispatch();
  const { isInterfaceBlocked, isGameStarted } = useSelector(
    (state) => state.gameReducer
  );
  function openCard(id, value) {
    dispatch(setCardOpen(id, value));
  }
  return (
    <button
      disabled={isInterfaceBlocked || !isOnBoard || !isGameStarted || isOpen}
      className={`${s.card} ${isOpen && s.active} ${
        !isOnBoard && s.hide
      } ${!isGameStarted && s.disabled}`}
      onClick={() => openCard(id, value)}
    >
      <div className={s.front}></div>
      <div className={s.back}>{value}</div>
    </button>
  );
};

export default Card;