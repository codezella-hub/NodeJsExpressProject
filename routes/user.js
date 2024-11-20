const express = require('express');
const router = express.Router();
const User = require('../models/user')
router.get('/show',(req,res)=>{
  res.send('4twin 9');
})
router.get('/add/:username/:email/:cin',(req,res)=>{
   
   new User({
     username : req.params.username,
     email : req.params.email,
     cin : req.params.cin
   }).save();
   res.send('user added');
  })
  router.post('/add',(req,res)=>{
    try{
        const user = new User(req.body)

    user.save();
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   })
   router.get('/showUser',async (req,res)=>{
    try{
     const user = await User.find();
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   })
   router.get('/showUser/:id',async (req,res)=>{
    try{
     const user = await User.findById(req.params.id);
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   })
   router.get('/showUsername/:username',async (req,res)=>{
    try{
        const username = req.params.username;
     const user = await User.find({
        username:username
     });
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   })
   router.put('/update/:id', async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true});


    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   })
   router.delete('/delete/:id', async(req,res)=>{
    try{
      await User.findByIdAndDelete(req.params.id);


    res.status(200).json("user deleted with success ");
    }catch(err){
        console.log('error');
    }
    
    
   })
module.exports = router;