import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function handler(req: any, res: any) {
  if (req.method == "POST") {
    try {
      let editContent = { title: req.body.title, content: req.body.content };
      let db = (await connectDB).db("forum");
      console.log(editContent);
      db.collection("post").updateOne(
        { _id: new ObjectId(req.body._id) },
        { $set: { editContent } }
      );
      res.redirect(302, "/list");
    } catch (error) {}
  }
}
