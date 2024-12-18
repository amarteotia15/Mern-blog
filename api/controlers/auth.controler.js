import User from "../models/user.model.js";
import bcrypty  from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next)=>{
    console.log(req.body);

    const {username,email,password} = req.body;

    if(!username || !email || !password || username === ' ' || email === '' || password === ''){
        next(errorHandler(400,'Please fill in all fields'));
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
                next(error);
            }
  
}

