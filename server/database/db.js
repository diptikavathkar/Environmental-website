import mongoose from 'mongoose'

export const Connection =async (username,password) =>{
    const url =`mongodb+srv://${username}:${password}@cluster0.my5txlu.mongodb.net/test`;
    
    try{
       await mongoose.connect(url, {useNewUrlParser:true});
       console.log('database connected sucessfully');
    }
    catch(error){
        console.log('Error while conneting to mongoose',error);
    }
}

export default Connection;