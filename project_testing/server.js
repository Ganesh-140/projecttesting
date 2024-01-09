const express = require('express');
const mongoose = require('mongoose');
const devuser = require('./devusermodel');
const jwt = require('jsonwebtoken');

const app = express();

// adding middleware to parse JSON request bodies
app.use(express.json());

mongoose.connect('mongodb+srv://ganeshworkplace:ganeshworkplace@cluster0.50rptaq.mongodb.net/?retryWrites=true&w=majority').then(
() => console.log('DB connected')
)

app.get('/', (req, res) =>{
    return res.send('hello world')
})

app.post('/register', async(req, res) => {
    try{
        const { username, email, password, confirmpassword } = req.body; 

        const exist = await devuser.findOne({email});
        if(exist){
            return res.status(400).send('user already registered');
        }
        if(password != confirmpassword){
            return res.status(400).send('password invalid');
        }

        let newUser = new devuser({
            username,email,password,confirmpassword
        })

        await newUser.save(); // Make sure to await the save operation
        return res.status(200).send('user registered');
    }
    catch(err){
        console.error(err);
        return res.status(500).send('Server Error')
    }
})

app.post('/login', async (req,res) => {
    try{
        const { email, password } = req.body; 
        const exist = await devuser.findOne({email});
        if(!exist){
            return res.status(400).send('User not Exist');
        }
        if(exist.password != password){
            return res.status(400).send('password invalid');
        }

        let payload = {
            user: {
                id:exist.id
            }
        }
        jwt.sign(payload, 'jwtPassword', {expiresIn:360000000},
             (err,token) => {
                if(err)  throw err
                return res.json({token})
    })
    }
    catch(err){
        console.error(err);
        return res.status(500).send('Server Error')
    }
})

app.listen(5000,() => console.log("server running"))
