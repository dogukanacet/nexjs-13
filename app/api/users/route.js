import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await req.json();
    return NextResponse.json(res);
  } catch (err) {
    throw new Error(err);
  }
};
