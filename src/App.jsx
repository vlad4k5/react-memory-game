import React from 'react'
import s from './App.module.scss'
import Board from './components/Board/Board'

const App = () => {
  return (
    <div>
      <div className={s.app_Container}>
        <Board />
      </div>
    </div>
  )
}
export default App
