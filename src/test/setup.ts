import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect(process.env.TEST_MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
});

afterEach(async () => {
  await mongoose.connection.db.collection("flights").deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});
