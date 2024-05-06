import { useGetEventsQuery } from "../../api/harisumiranApi";
function UpcomingEvents() {
  const { data: events, error, isLoading } = useGetEventsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !events) {
    return <div>Failed to load Timings. Try again later.</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];

    return { day, monthName };
  };
  const formatTime = (time) => {
    const formattedTime = new Date(`1970-01-01T${time}`);
    return formattedTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour24: true,
    });
  };
  return (
    <div className="events mb-8">
      <h1 className="font-['Playfair_Display'] text-title mb-3">
        Upcoming Events
      </h1>
      <ul className="overflow-hidden rounded-lg">
        {events.map((event) => (
          <li key={event.id} className="flex bg-white items-center">
            {event.image_url && (
              <div className="event-left w-1/4">
                <a
                  href={event.image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={event.image_url}
                    alt={event.title}
                    style={{ maxWidth: "100%" }}
                  />
                </a>
              </div>
            )}
            <div className="event-right w-3/4 flex flex-col pl-20 relative">
              <h2 className="font-bold">{event.title}</h2>
              <div className="absolute bottom-0 top-0 m-auto -left-10 h-20 w-20 bg-primary text-primary rounded-full items-center flex flex-col justify-center">
                <div className="font-bold text-xl">
                  {formatDate(event.date).day}
                </div>
                <div>{formatDate(event.date).monthName}</div>
              </div>
              <p>
                {formatTime(event.time_start)} - {formatTime(event.time_end)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingEvents;
