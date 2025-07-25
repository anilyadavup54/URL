import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connectToMongoDB = (url) => {
  return mongoose.connect(url);
};

export default connectToMongoDB;