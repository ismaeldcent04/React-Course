import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image={
        "https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-plaza-de-catalunya.jpg"
      }
      title={"First Meetup"}
      address={"Some Street 5, Some City"}
      description={"This is a first meetup"}
    />
  );
}
