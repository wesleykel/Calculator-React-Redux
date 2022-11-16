import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./calc.module.css";
import "./App.css";
import { actions } from "./store/index";
function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const total = useSelector((state) => state.total);
  const symbol = useSelector((state) => state.symbol);
  const inputNumber = (prop) => {
    dispatch(actions.inputNumber(prop));
  };

  const equals = (prop) => {
    dispatch(actions.equals(prop));
  };
  const plus = (prop) => {
    dispatch(actions.plus(prop));
  };
  const minus = (prop) => {
    dispatch(actions.minus(prop));
  };
  const multiply = (prop) => {
    dispatch(actions.multiply(prop));
  };
  const divide = (prop) => {
    dispatch(actions.multiply(prop));
  };
  const allClear = () => {
    dispatch(actions.allClear());
  };

  const backDelete = () => {
    dispatch(actions.backDelete());
  };
  return (
    <div className="App">
      <div className={style.wrapper}>
      
        <section className={style.screen}>
          <div className={style.topScreen}>{counter}</div>
          <div className={style.bottomScreen}>
            {total}
            {symbol}
          </div>
        </section>
        <div className={style.funcButtons}>
          <button className={style.topButton}  onClick={() => allClear()}>AC</button>
          <button className={style.topButton}  onClick={() => backDelete()}>del</button>
        </div>
      
          <section className={style.buttonWrapper}>
            <button className={style.numberButton} onClick={() => inputNumber(7)}>7</button>
            <button className={style.numberButton} onClick={() => inputNumber(8)}>8</button>
            <button className={style.numberButton} onClick={() => inputNumber(9)}>9</button>
            <button  className={style.funcButton} onClick={() => multiply("*")}>x</button>
            <button className={style.numberButton} onClick={() => inputNumber(4)}>4</button>
            <button className={style.numberButton} onClick={() => inputNumber(5)}>5</button>
            <button className={style.numberButton} onClick={() => inputNumber(6)}>6</button>
            <button   className={style.funcButton} onClick={() => divide("/")}>÷</button>
            <button className={style.numberButton} onClick={() => inputNumber(1)}>1</button>
            <button className={style.numberButton} onClick={() => inputNumber(2)}>2</button>
            <button className={style.numberButton} onClick={() => inputNumber(3)}>3</button>
            <button   className={style.funcButton} onClick={() => minus("-")}>-</button>
            <button className={style.numberButton} onClick={() => inputNumber(0)}>0</button>
            <button  className={style.funcButton}  onClick={() => inputNumber(".")}>.</button>
            <button   className={style.funcButton} onClick={() => equals()}>=</button>
            <button   className={style.funcButton} onClick={() => plus("+")}>+</button>
          </section>
        </div>
      </div>

  );
}

export default App;
