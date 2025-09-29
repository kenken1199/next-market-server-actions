import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kenken1199:Kenta2428@cluster0.pcryqaz.mongodb.net/nextMarketDataSeverActions?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success:Conected to MongoDB");
  } catch {
    console.log("Failure:Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
