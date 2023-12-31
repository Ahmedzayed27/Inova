import mongoose from "mongoose";

const connection = async() =>{
    return await mongoose.connect(process.env.DbConnection)
    .then(()=>{
        console.log('Database Connected')}).
        catch(()=>{
            console.log('Database Error')
        })
}

export default connection;