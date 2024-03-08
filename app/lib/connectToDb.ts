import mongoose from "mongoose";

export async function connectToDb() {
    try {
        const db = await mongoose.connect(String(process.env.MONGODB));
    } catch (error) {
        console.log(error);
        throw new Error(String(error));
    }
}