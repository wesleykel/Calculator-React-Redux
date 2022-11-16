import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
      <h1> Calculator App</h1>
      <h2> counter = {counter}</h2>
      <h2> total = {total}</h2>
      <h2> {symbol}</h2>
      <button onClick={() => inputNumber(1)}>1</button>
      <button onClick={() => inputNumber(2)}>2</button>
      <button onClick={() => inputNumber(3)}>3</button>
      <button onClick={() => inputNumber(4)}>4</button>
      <button onClick={() => inputNumber(5)}>5</button>
      <button onClick={() => inputNumber(6)}>6</button>
      <button onClick={() => inputNumber(7)}>7</button>
      <button onClick={() => inputNumber(8)}>8</button>
      <button onClick={() => inputNumber(9)}>9</button>
      <button onClick={() => inputNumber(0)}>0</button>
      <button onClick={() => inputNumber(".")}>.</button>
      <button onClick={() => minus("-")}>-</button>
      <button onClick={() => plus("+")}>+</button>
      <button onClick={() => divide("/")}>/</button>
      <button onClick={() => multiply("*")}>*</button>
      <button onClick={() => equals()}>=</button>
      <button onClick={() => allClear()}>AC</button>
      <button onClick={() => backDelete()}>del</button>
    </div>
  );
}

export default App;
