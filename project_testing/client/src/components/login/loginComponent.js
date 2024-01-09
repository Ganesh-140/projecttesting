import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const LoginComponent = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', data);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={data.email}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={data.password}
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
