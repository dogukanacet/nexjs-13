import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/comments");
    const res = await req.json();

    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json("comments request error", { status: 500 });
  }
};
