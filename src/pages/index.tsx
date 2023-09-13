import { connectDB } from "../../util/database";

export default async function Home() {
  const express = require("express");
  const db = require("./forum");
  let result = await db.collection("post").find().toArray();

  console.log(result);

  return <div>안녕</div>;
}
