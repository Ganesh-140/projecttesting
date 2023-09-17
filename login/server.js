const express = require('express');
const mongoose = require('mongoose');
const RegisterUser = require('./model'); // Use the correct variable name here
const app = express();

mongoose
  .connect("mongodb+srv://ganeshworkplace:ganeshworkplace@cluster0.50rptaq.mongodb.net/?retryWrites=true&w=majority")  
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error: ", err));

app.use(express.json());

app.post('/register', async (req, res) => {
  try {
    const { username, email, password, confirmpassword } = req.body;
    let exist = await RegisterUser.findOne({ email: email }); // Use the correct variable name here
    if (exist) {
      return res.status(400).send("User Already Exist");
    }
    if (password !== confirmpassword) {
      return res.status(400).send("Passwords do not match");
    }
    let newUser = new RegisterUser({ // Use the correct variable name here
      username,
      email,
      password,
      confirmpassword
    });

    await newUser.save();
    res.status(200).send("Registration Successful");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
