import React, { useState } from 'react';

const RegisterComponent = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
    confirmpassword: ''
  });
  const { username, password, email, confirmpassword  } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (password === confirmpassword) {
      if (password.match(passwordRegex)) {
        console.log("Registering user:", data);
      } else {
        console.error("Password must have min 8 characters, one capital letter, one number, and one special character");
      }
    } else {
      console.error("Passwords do not match");
    }
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
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={email}
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
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          onChange={changeHandler}
          value={confirmpassword}
        />
        <br />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};

export default RegisterComponent;
