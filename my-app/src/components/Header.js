import React, {useState} from "react";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import {CounterActions} from "../store/index";

const Header = () => {
  const dispatch = useDispatch();
  const staicLogin = useSelector((state) => state.login);

  const toggleInputDialog = () => {
    dispatch(CounterActions.loginSystem());
    console.log(staicLogin);
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="#">My Products</a>
          </li>
          <li>
            <a href="#">My Sales</a>
          </li>
          <li>
            <button onClick={toggleInputDialog}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
