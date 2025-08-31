export interface LooplaEvent {
    title: string;
    date: string;
    location: string;
    description?: string;
}

export const events: LooplaEvent[] = [
    {
        title: "event1",
        date: new Date("09/01/2025").toLocaleDateString("GB"),
        location: "LONDON"
    },
    {
        title: "event2",
        date: new Date("10/01/2025").toLocaleDateString("GB"),
        location: "BRISTOL"
    },
    {
        title: "longEevent3",
        date: new Date("10/01/2025").toLocaleDateString("GB"),
        location: "BRISTOL"
    },
    {
        title: "ev4",
        date: new Date("10/01/2025").toLocaleDateString("GB"),
        location: "BRISTOL"
    }
]