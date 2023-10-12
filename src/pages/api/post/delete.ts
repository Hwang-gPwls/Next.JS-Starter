import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

export default async function handler(req: any, res: any) {
  if (req.method == "DELETE") {
    try {
      console.log(req);
      let db = (await connectDB).db("forum");
      db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
      res.ststus(200).json("삭제완료");
    } catch (error) {}
  }
}
