import {NextRequest, NextResponse} from "next/server";
import {events} from "./mockData";

export const GET = async () => {
    const sortedEvents = events.toSorted((a, b) =>
        a.title.length - b.title.length)
  return NextResponse.json(sortedEvents);
};

export const POST = async (request: NextRequest) => {
  const {title, description, date, location} = await request.json();
    console.log({title, description, date, location})
 
  return NextResponse.json({message: "success"}, {status: 201});
};
