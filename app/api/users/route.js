import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await req.json();

    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    return NextResponse.json("users request error", { status: 500 });
  }
};
