import { LooplaEvent } from "@/app/api/events/mockData";

export const getTickets: () => Promise<LooplaEvent[]> = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/events");
      return res.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  export const createEvent = async (
    event: LooplaEvent
  ) => {
    try {
      await fetch("http://localhost:3000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.log({error});
    }
  };