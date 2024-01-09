import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import firebaseDB from './firebase';

const Register = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const [getData, setGetData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datadetails = await firebaseDB.child('register').get();
        if (datadetails.exists()) {
          setGetData(datadetails.val());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const { firstname, lastname, email } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      await firebaseDB.child('register').push(data);
      setData({
        firstname: '',
        lastname: '',
        email: '',
      });
      console.log('Data saved successfully!');
    } catch (err) {
      console.error('Error saving data:', err);
    }
  };

  const deleteHandler = key => {
    firebaseDB.child(`register/${key}`).remove(err => {
      if (err) {
        console.log(err);
      }
    });
  };

  return (
    <div>
      <center>
        <h2>Register Form</h2>
        <form onSubmit={submitHandler}>
          <label>First Name</label><br />
          <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={changeHandler} /><br />
          <label>Last Name</label><br />
          <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={changeHandler} /><br />
          <label>Email</label><br />
          <input type="text" name="email" placeholder="Email" value={email} onChange={changeHandler} /><br />
          <input type="submit" value="Register" />
        </form>
      </center>
      <div>
        {Object.keys(getData).map(key => (
          <div key={key} style={{ margin: '10px' }}>
            First Name: {getData[key].firstname}<br />
            Last Name: {getData[key].lastname}<br />
            Email: {getData[key].email}<br />
            <button onClick={() => history(`/edit/?firstname=${getData[key].firstname}&lastname=${getData[key].lastname}&email=${getData[key].email}&key=${key}`)}>Update</button>
            <button onClick={() => deleteHandler(key)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Register;
