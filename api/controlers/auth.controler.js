import User from "../models/user.model.js";
import bcrypty  from 'bcryptjs'

export const signup = async(req,res)=>{
    console.log(req.body);

    const {username,email,password} = req.body;

    if(!username || !email || !password || username === ' ' || email === '' || password === ''){
        return res.status(400).json({message: 'Please fill in all fields'});
    }

    const hashedPassword = bcrypty.hashSync(password,10);

    const newUser =  new User({
        username,
        email,
        password : hashedPassword});
            try{
                await newUser.save(); 
                res.json({message: 'User created successfully'});
            } catch(error){
                res.status(500).json({message: error.message});
            }
  
}

