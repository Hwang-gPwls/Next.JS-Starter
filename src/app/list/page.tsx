import Link from "next/link";
import { connectDB } from "../../../util/database";
import DetailLink from "./detailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((list, i) => (
        <div className="list-item" key={list._id}>
          <Link prefetch={false} href={`/detail/${list._id}`}>
            <h4>{list.title}</h4>
          </Link>
          <DetailLink />
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
