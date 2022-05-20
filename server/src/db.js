import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export default () => {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    }
  );

  mongoose.connection.on('open', () => console.log("MongoDB: Connected !"));
  mongoose.connection.on('err', (e) => console.log("MongoDB: Not Connected !" , e));

};
