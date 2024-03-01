import EventCard from "./eventcard"
import { FetchEvents } from "@/lib/fetchEvents"
import PaginationControls from "./pagination-controls"


type EventListProps = {
    city:string,
    page?:number
}
export default async function EventsList({city, page = 1}:EventListProps) {

const {events, totalCount} = await FetchEvents(city, page)
 const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";

 const nextPath = totalCount > page * 6 ?  `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
        {events.map(event => <EventCard key={event.id} event={event}/>)}

        <PaginationControls previousPath={previousPath} nextPath={nextPath}/>
  </section>
  )
}
