import { connectDB } from "../../../util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((list) => (
        <div className="list-item" key={list.id}>
          <h4>{list.title}</h4>
          <p>{list.content}</p>
        </div>
      ))}
    </div>
  );
}
