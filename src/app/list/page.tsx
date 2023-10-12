import Link from "next/link";
import { connectDB } from "../../../util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (result === null) return null;

  return (
    <div className="list-bg">
      {result.map((list) => (
        <div className="list-item" key={list._id.toString()}>
          <Link prefetch={false} href={`/detail/${list._id}`}>
            <h4>{list.title}</h4>
          </Link>
          <Link href={`/edit/${list._id}`}>✏️</Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
