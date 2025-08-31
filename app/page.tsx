'use client';
import { LooplaEvent } from "./api/events/mockData";
import {useMutation, useQuery} from "@tanstack/react-query";
import { createEvent, getTickets } from "./helpers/hooks/api";


export default function Home() {
  const {data: events} = useQuery({
    queryKey: ["events"],
    queryFn: getTickets
  });

  const createEventMutation = useMutation({
    mutationFn: async (
      event: LooplaEvent) => await createEvent(event)
  });  

  console.log({events})
  return (
    <div>
      <button onClick={() => createEventMutation.mutate({date: "d", location: "D", title: "dwd"})}>createEvent</button>
    </div>
  );
}
