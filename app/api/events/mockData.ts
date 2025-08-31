export interface LooplaEvent {
    id: string;
    title: string;
    date: string;
    location: string;
    description?: string;
}

export const events: LooplaEvent[] = [
    {
        id: "1",
        title: "event1",
        date: new Date("09/01/2025").toLocaleDateString("GB"),
        location: "LONDON"
    },
    {
        id: "2",
        title: "event2",
        date: new Date("10/01/2025").toLocaleDateString("GB"),
        location: "BRISTOL"
    },
    {
        id: "3",
        title: "longEevent3",
        date: new Date("10/01/2025").toLocaleDateString("GB"),
        location: "BRISTOL"
    },
    {
        id: "4",
        title: "ev4",
        date: new Date("10/01/2025").toLocaleDateString("GB"),
        location: "BRISTOL"
    }
]