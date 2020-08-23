import mongoose from "mongoose";
import { app } from "./app";
import { MongoMemoryServer } from "mongodb-memory-server";
// import dotenv from "dotenv";
// dotenv.config();
const start = async () => {
  try {
    //connect to db
    // const mongo = new MongoMemoryServer();
    // const mongoURI = await mongo.getUri();

    await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.log("failed to connect to db");
    console.error(error);
  }

  app.listen(4000, () => {
    console.log("Server running on port 4000");
  });
};

start().catch((error) => {
  console.log("failed to start server");
  console.error(error);
});
