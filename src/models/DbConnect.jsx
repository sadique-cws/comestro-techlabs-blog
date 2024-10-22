import mongoose from "mongoose";

 const DbConnect = () => {
    try{
        mongoose.connect('mongodb://localhost:27017/comestro-techlabs');
        console.log('Connected to the database');
    }
    catch(err){
        console.error('Failed to connect to the database:', err);
    }
}


export default DbConnect;