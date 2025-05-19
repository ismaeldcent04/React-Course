import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {

    const addMeetup = (meetup) => {
        console.log(meetup)
    }

    return <NewMeetupForm onAddMeetup={addMeetup} />
}