import { MongoClient, MongoClientOptions } from "mongodb";

declare global {
  var _mongo: MongoClient | undefined;
}
const mongoose = require("mongoose");

const url =
  "mongodb+srv://Hyejin:ZGJWXPk67HSepG7U@cluster0.braxixv.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  if (process.env.NODE_ENV === "development") {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } else {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }
};
export { connectDB };
