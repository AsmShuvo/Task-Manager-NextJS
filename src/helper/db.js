import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db connected ...");
    const user_ = new User({
      name: "test name 3",
      email: "test3@gmail.com",
      password: "testpassword",
      about: "this is testing",
    });
    await user_.save();
    console.log("user created");
  } catch (error) {
    console.log("Failed to connect with database");
    console.log("Database error", error);
  }
};
