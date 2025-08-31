'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {events} from '../../api/events/mockData'
import { useParams } from 'next/navigation'
const EventDetailsPage = () => {
    const event = events.filter((e) => e.id === useParams().id)[0];

    const params = useParams();
    console.log({params})
  return <div className='flex flex-col items-center mt-10'>
    <Card className="w-1/2" key={event.title}>
          <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </CardDescription>
          </CardHeader>
        </Card>
  </div>;
};

export default EventDetailsPage;