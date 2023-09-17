import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import firebaseDB from './firebase';


const Edit = () => {
  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const history = useNavigate();

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const { firstname, lastname, email } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setData({
      firstname: query.get('firstname'),
      lastname: query.get('lastname'),
      email: query.get('email'),    
    });
  }, [query]);

  const submitHandler = e => {
    e.preventDefault();
    const key = query.get('key');
    if (key) {
      firebaseDB.child(`register/${key}`).set(
        data,
        err => {
          if (err) {
            console.log(err);
          } else {
            // Navigate back to the register page without explicitly reloading
            history(`/`); // Replace '/register' with your actual route
          }
        }
      );
    }
  };

  return (
    <div>
      <center>
        <h2>Edit Form</h2>
        <form onSubmit={submitHandler}>
          <label>First Name</label><br />
          <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={changeHandler} /><br />
          <label>Last Name</label><br />
          <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={changeHandler} /><br />
          <label>Email</label><br />
          <input type="text" name="email" placeholder="Email" value={email} onChange={changeHandler} /><br />
          <input type="submit" value="Save" />
        </form>
      </center>
    </div>
  );
};

export default Edit;
