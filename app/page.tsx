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
import { useRouter } from "next/navigation";



export default function Home() {

  const [searchWord, setSearchWord] = useState("")
  const router = useRouter();

  const {data: events} = useQuery({
    queryKey: ["events"],
    queryFn: getTickets
  });

  return (
    <div className="mt-4 flex flex-col items-center gap-6">
      <Input className="w-1/2" type="text" placeholder="Search" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
      {events
        ?.filter((event) => 
          event.title.toLowerCase().includes(searchWord.toLowerCase())
        )
        .map((event) => (
          <button key={event.title} className="w-1/2" onClick={() => {
            router.push(`/event/${event.id}`);
          }}>

        <Card className="items-start text-justify" >
          <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </CardDescription>
          </CardHeader>
        </Card>
          </button>
      ))}
      <Button>
        <Link href="/create">Create Event</Link>
        </Button>
    </div>
  );
}
