import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login", data);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={changeHandler}
          value={username}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={password}
        />
        <br />
        <input type="submit" name="Submit" />
        <Link to="/register"> <input type="Register" 
          placeholder="Register" name="Register" /></Link>
      </form>
    </div>
  );
};

export default LoginComponent;
