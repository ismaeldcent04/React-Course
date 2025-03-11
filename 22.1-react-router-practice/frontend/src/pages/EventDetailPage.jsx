import { useParams } from "react-router-dom";

export const EventDetailPage = () => {
  const { eventId } = useParams();
  return (
    <>
      <h1>Detail Page</h1>
      <p>{eventId}</p>
    </>
  );
};
