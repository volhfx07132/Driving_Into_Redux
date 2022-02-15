import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { CounterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const [dataButton, setDataButton] = useState("Hide Data");

  const incrementHandler = () => {
    dispatch(CounterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(CounterActions.decrement());
  };

  const increageHandler = () => {
    dispatch(CounterActions.increase(10));
  };

  const toggleCounterHandle = () => {
    dispatch(CounterActions.toggleCounter());
    if(show){
      setDataButton("Show Data");
    }else{
      setDataButton("Hide Data");
    }
  };

  return (
    <main className={classes.counter}>
      {show && (
        <div>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
        </div>
      )}
      <div>
        <button onClick={incrementHandler}>Imcrement</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increageHandler}>Increase by 10</button>
        <button onClick={toggleCounterHandle}>{dataButton}</button>
      </div>
    </main>
  );
};

export default Counter;
