import s from "./App.module.scss";
import Board from "./components/Board/Board";


const App = () => {
  console.log(localStorage)
  return <div>
      <div className={s.app_Container}>
        <Board />
      </div>
    </div>
}
export default App;