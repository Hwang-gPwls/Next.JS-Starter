import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

type PageParams = {
  id: number | ObjectId | Uint8Array;
};

export default async function Edit({ params }: { params: PageParams }) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });

  if (result === null) return null;

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title}></input>
        <input name="content" defaultValue={result.content} />
        <input
          name="_id"
          style={{ display: "none" }}
          defaultValue={result._id.toString()}
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
