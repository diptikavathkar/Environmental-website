import bcrypt from 'bcrypt';
//import user from '../models/user.js';
import Token from '../models/token.js';
import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signupUser = async (request,response)=>
{
    try{

        // const salt = await bcrypt.genSalt();
        const hashedPassword= await bcrypt.hash(request.body.password, 10);
        
        

        const user = {username: request.body.username, email:request.body.email, password: hashedPassword};
        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({msg:'signup sucessfull'});
    }catch(error){
        return response.status(500).json({msg: 'error while signup'});
    }
}

export const loginUser = async (request,response)=>
{
    //match with database
    let user = await User.findOne({username: request.body.username})
    if(!user){
        return response.status(400).json({msg:'Username did not match'});    
    }

    try{
        let match = await bcrypt.compare(request.body.password, user.password);
        if(match){
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn:'30m'});
            const refreshToken=jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({ token: refreshToken})
            await newToken.save();

            return response.status(200).json({accessToken: accessToken, refreshToken:refreshToken, username: user.username, email:user.email})
        }
        else{
            return response.status(400).json({msg: 'Password did not match'});
        }
    }
    catch(error){
        //if there is issue in network or db connectivity
        return response.status(500).json({msg: 'Error while logging in'});
    }

}

