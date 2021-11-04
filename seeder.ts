import { connect } from "mongoose";
import { UserModel } from "./src/modules/users/user.model";

const mongoURI = "mongodb://localhost/feedbacks_db";

async function run(): Promise<void> {
  try {
    console.log(mongoURI);
    if (!mongoURI) throw new Error("MONGODB_URL not found!");
    await connect(mongoURI);

    const doc1 = new UserModel({
      email: "user.one@feedbacks4you.com",
      name: "User One",
      password: "secret",
    });
    await doc1.save();

    const doc2 = new UserModel({
      email: "user.two@feedbacks4you.com",
      name: "User Two",
      password: "secret",
    });
    await doc2.save();

    const doc3 = new UserModel({
      email: "user.three@feedbacks4you.com",
      name: "User Three",
      password: "secret",
    });
    await doc3.save();

    console.log(doc1);
    console.log(doc2);
    console.log(doc3);
    const users = await UserModel.find({});
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

run().catch((err) => console.log(err));
