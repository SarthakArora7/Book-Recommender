import mongoose from "mongoose"

let isConnected = false

export async function connectDB(){
    if (isConnected) return;

    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true
    console.log("MongoDB connected")

}