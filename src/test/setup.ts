import mongoose from "mongoose";
import { Flight } from "../models/flight";

beforeAll(async () => {
  //const mongoUri = await mongo.getUri();
  const mongoUri = "mongodb://127.0.0.1:27017/test-flights-api";
  await mongoose.connect(process.env.TEST_MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
});

afterEach(async () => {
  await mongoose.connection.db.collection("flights").deleteMany({});
  // for (let collection of collections) {
  //   await collection.deleteMany({});
  // }
  // const collections = await mongoose.connection.db.collections();
  // for (let collection of collections) {
  //   await collection.deleteMany({});
  // }
});

afterAll(async () => {
  await mongoose.connection.close();
});
