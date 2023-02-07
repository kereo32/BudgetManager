import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Login from '../Login';

type Props = {};

const Home = (props: Props) => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h4>HG</h4>
      <h3>{user && user.email}</h3>
      {/* <button onClick={user && user.signOut}>Log Out</button> */}
    </div>
  );
};

export default Home;
