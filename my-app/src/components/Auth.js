import classes from "./Auth.module.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../store/index";

const Auth = () => {
  const staicLogin = useSelector((state) => state.login);
  if (staicLogin) {
    return (
      <div className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button>Login</button>
          </form>
        </section>
      </div>
    );
  } else {
    return <div className={classes.auth}>Please! Click login</div>;
  }
};

export default Auth;
