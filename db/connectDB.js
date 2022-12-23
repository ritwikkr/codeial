import mongoose from "mongoose";

function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  } catch (error) {
    console.log(`MongoDb Error: ${error}`);
  }
}

export default connectDB;
