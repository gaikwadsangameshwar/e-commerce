import mongoose from "mongoose";

const connectionToDB=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGOODB_URI!)
        console.log(`DB is connected:${connection.connection.host}`)
    } 
    catch (error:any) {
        console.log("DB is not connected",error.message)
    }
}

export default connectionToDB;