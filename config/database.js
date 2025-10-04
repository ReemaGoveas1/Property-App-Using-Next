import mongoose from "mongoose";

let connected = false;

const connectDB=async()=>{
    //only fields that are specified in the schema will be saved in the database
    mongoose.set("strictQuery", true);

    //if the db is already connected, dont connect again
    if(connected) {
        console.log("already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB;