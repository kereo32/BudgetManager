import React, { SyntheticEvent, useContext, useState } from 'react';
import { auth } from '../../config/firebaseSetup';
import { AuthContext } from '../../context/AuthContext';

type Props = {};

const Login = (props: Props) => {
  const user = useContext(AuthContext);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const createAccount = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(state.email, state.password);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(state.email, state.password);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  const onChange = ({ target: { value, name } }) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(user);
  return (
    <div>
      <form>
        <label>
          Mail
          <input onChange={onChange} value={state.email} id="email" type="email" name="email" />
        </label>
        <label>
          Password
          <input value={state.password} onChange={onChange} id="password" type="password" name="password" />
        </label>
        <input
          onClick={(e) => {
            createAccount(e);
          }}
          type="submit"
          value="Submit"
        />
      </form>
      <button onClick={signOut}>Log out</button>
    </div>
  );
};

export default Login;
