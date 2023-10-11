import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

type PageParams = {
  id: number | ObjectId | Uint8Array;
};

export default async function Detail({ params }: { params: PageParams }) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });

  if (result === null) return null;

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
