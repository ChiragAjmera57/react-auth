const express = require('express');
const User = require('./modals/UserModal');
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const connectToMongoDB = require('./config/mongoose.config');
app.use(express.json())

app.post('/signup', async (req, res) => {
    console.log(req.body)
    const{name,email,password} = req.body
    try { 
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        name,email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({ msg:`user registerd succesfully` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
   
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'CHIRAG57', { expiresIn: '20d' });
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });


  app.listen('8080',()=>{
    console.log(`runninig on port 8080`);
    connectToMongoDB()
  })