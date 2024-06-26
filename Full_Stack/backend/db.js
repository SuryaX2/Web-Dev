// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/signup"

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Conected successful");
    } catch (error) {
        console.log("Error: " + error);
    }
}

export default connectToMongo