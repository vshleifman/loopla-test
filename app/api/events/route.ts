import {NextRequest, NextResponse} from "next/server";
import {events} from "./mockData";

export const GET = async () => {
  return NextResponse.json(events);
};

export const POST = async (request: NextRequest) => {
  const {title, description, date, location} = await request.json();
    console.log({title, description, date, location})
 
  return NextResponse.json("success");
};
