import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

export const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;
  return <EventsList events={events} />;
};

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
  }
}
