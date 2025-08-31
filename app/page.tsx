'use client';
import { useQuery} from "@tanstack/react-query";
import { getTickets } from "./helpers/hooks/api";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { useState } from "react";
import Link from "next/link";



export default function Home() {

  const [searchWord, setSearchWord] = useState("")

  const {data: events} = useQuery({
    queryKey: ["events"],
    queryFn: getTickets
  });



  console.log({events})
  return (
    <div className="mt-4 flex flex-col items-center gap-6">
      <Input className="w-1/2" type="text" placeholder="Search" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
      {events
        ?.filter((event) => 
          event.title.toLowerCase().includes(searchWord.toLowerCase())
        )
        .map((event) => (
        <Card className="w-1/2" key={event.title}>
          <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </CardDescription>
          </CardHeader>
        </Card>
      ))}
      <Button>
        <Link href="/create">Create Event</Link>
        </Button>
    </div>
  );
}
